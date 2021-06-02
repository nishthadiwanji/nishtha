<?php

namespace App\Http\Controllers\Role;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Role\RoleRequest;
use App\Repositories\RoleRepository;
use Sentinel;
use DB;

class RoleController extends Controller
{
    protected $role_repo;
    public function __construct(RoleRepository $role_repo){
        $this->middleware('ats.checkrole:admin', ['except' => ['show']]);
        $this->role_repo = $role_repo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $records = $this->getPaginationRecordCount(request());
        try{
            $roles = $this->role_repo->listAllRole()->paginate($records);
            //$roles = $roles->paginate($records);
            return view('modules.role.index',compact('roles','records'));
        } catch(Exception $e) {
            Log::error(__('log.error_list_role').'=>',[$e->getMessage()]);
            return abort(503);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $recentRoles = $this->role_repo->listAllRole()
            ->take(5)
            ->get();
        return view('modules.role.create',compact('recentRoles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        try{
            DB::beginTransaction();
            $role = $this->role_repo->addRole($request->all());
            if(!$role) {
                DB::rollBack();
                return $this->responseFail(__('error.500', ['operation' => __('variable.add_role')]), ['title' => __('variable.sorry_word')]);
            }
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('role.add_role'),'title' => __('variable.great_word')]);
        } catch(Exception $e) {
            DB::rollBack();
            Log::error(__('log.error_add_role').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.add_role')]), ['title' => __('variable.sorry_word')]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id_token)
    {
        $id = decrypt_id_info($id_token);
        $role = Sentinel::getRoleRepository()->createModel()->findOrFail($id);
        return view('modules.role.edit',compact('role'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //because we don't have Model for Role so we can't apply Model Binding
    public function update(RoleRequest $request, $id_token)
    {
        $id = decrypt_id_info($id_token);
        
        $role = Sentinel::getRoleRepository()->createModel()->find($id);
        if(!$role) return abort(404);
        try{
            DB::beginTransaction();
            $result = $this->role_repo->updateRole($role, $request->name);
            if(!$result) {
                DB::rollBack();
                return $this->responseFail(__('error.500', ['operation' => __('variable.update_role')]), ['title' => __('variable.sorry_word')]);
            }
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('role.update_role'),'title' => __('variable.great_word')]);
        } catch(Exception $e) {
            DB::rollBack();
            Log::error(__('log.error_update_role').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.update_role')]), ['title' => __('variable.sorry_word')]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id_token)
    {
        $id = decrypt_id_info($id_token);
        $role = Sentinel::getRoleRepository()->createModel()->find($id);
        
        if(!$role) return $this->responseFail(__('role.role_not_found'), ['title' => __('variable.attention_word')]);
        
        if(DB::table('role_users')->where('role_id',$role->id)->count()) 
            return $this->responseFail(__('role.user_exists_in_role'), ['title' => __('variable.attention_word')]);
        
        try {
            DB::beginTransaction();
            $result = $this->role_repo->removeRole($role);
            if(!$result) {
                DB::rollBack();
                return $this->responseFail(__('error.500', ['operation' => __('variable.destroy_role')]), ['title' => __('variable.sorry_word')]);
            }
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('role.destroy_role'),'title' => __('variable.great_word')]);
        } catch(Exception $e) {
            DB::rollBack();
            Log::error(__('log.error_delete_role').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.destroy_role')]), ['title' => __('variable.sorry_word')]);
        }
    }
}