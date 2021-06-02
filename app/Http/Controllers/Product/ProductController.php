<?php

namespace App\Http\Controllers\Product;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Product\ProductRepository;
use App\Http\Requests\Product\ProductRequest;
use App\Models\Product\Product;
use DB;

class ProductController extends Controller
{
    protected $product_repo;

    public function __construct(ProductRepository $product_repo){
        $this->product_repo = $product_repo;
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
            $products = $this->product_repo->listAllProduct()->paginate($records);
            return view('modules.product.index', compact('products','records'));
        } catch(Exception $e) {
            Log::error(__('log.error_list_product').'=>',[$e->getMessage()]);
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
        return view('modules.product.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        try{
            DB::beginTransaction();
            $product = $this->product_repo->createProduct(request()->all());
            if(!$product) {
                DB::rollBack();
                return $this->responseFail(__('error.500', ['operation' => __('variable.add_product')]), ['title' => __('variable.sorry_word')]);
            }
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('messages.add_product'),'title' => __('variable.great_word')]);
        }
        catch(Exception $e){
            DB::rollBack();
            Log::error(__('log.error_add_product').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.add_product')]), ['title' => __('variable.sorry_word')]);
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
        //$product = Product::findOrFail($id);
        $product = $this->product_repo->getById(decrypt_id_info($id_token));
        if(!$product){
            abort(404);
        }
        return view('modules.product.edit',compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id_token)
    {
        //$product = Product::find($id);
        $product = $this->product_repo->getById(decrypt_id_info($id_token));
        if(!$product) {
            return $this->responseFail(__('messages.not_found_msg',['module_name'=>'product']), ['title' => __('variable.sorry_word')]);
        }
        try{
            DB::beginTransaction();
            $product = $this->product_repo->updateProduct($product, $request->all());
            if(!$product) {
                DB::rollBack();
                return $this->responseFail(__('error.500', ['operation' => __('variable.update_product')]), ['title' => __('variable.sorry_word')]);
            }
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('product.update_product'),'title' => __('variable.great_word')]);
        } catch(Exception $e) {
            DB::rollBack();
            Log::error(__('log.error_update_product').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.update_product')]), ['title' => __('variable.sorry_word')]);
        }    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_token)
    {
        $product = $this->product_repo->getById(decrypt_id_info($id_token));
        if(!$product) {
            return $this->responseFail(__('messages.not_found_msg',['module_name'=>'product']), ['title' => __('variable.sorry_word')]);
        }
        try{
            DB::beginTransaction();
            $product->delete();
            DB::commit();
            return $this->responseSuccessWithData(['message' =>__('product.delete_product'),'title' => __('variable.great_word')]);
        } catch(Exception $e){
            DB::rollBack();
            Log::error(__('log.error_delete_product').'=>',[$e->getMessage()]);
            return $this->responseFail(__('error.500', ['operation' => __('variable.destroy_product')]), ['title' => __('variable.sorry_word')]);
        }
    }
}
