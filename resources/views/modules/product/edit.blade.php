@extends('layouts.main')
@section('page_title')
@lang('product.edit_product_name')
@stop
@section('page_specific_css')
@stop
@section('page_specific_body')
<div class="row">
	<div class="col-lg-12">
		<!--begin::Portlet-->
		<div class="kt-portlet">
			<div class="kt-portlet__head">
				<div class="kt-portlet__head-label">
					<h3 class="kt-portlet__head-title kt-font-brand">
						@lang('product.edit_product_name')
					</h3>
				</div>
			</div>
			<form class="kt-form" id="updateProductForm" name="updateProductForm" data-action="{{route('product.update', [$product->id_token])}}" onsubmit="return false;">
				<div class="kt-portlet__body">
					<div class="row">
						<div class="col-md-12">
							<div class="form-group kt-form__group">
								<label class="control-label"> @lang('product.product_name') </label>
								<span class="required">*</span>
								<input type="text" name="product_name" value="{{$product->product_name}}" class="form-control" placeholder="@lang('product.enter_product')">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group kt-form__group">
								<label class="control-label"> @lang('product.product_desc') </label>
								<span class="required">*</span>
								<textarea id="type" name="type"  rows="4" cols="50" class="form-control" placeholder="@lang('product.enter_desc')">{{$product->description}}</textarea>
							</div>
						</div>
					</div>                    
				</div>
				<div class="kt-portlet__foot">
					<div class="kt-form__actions">
						<div class="row">
							<div class="col-md-6">
								<button class="btn btn-primary ats-submit" id="updateProductBtn">
									@lang('button.update')
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!--end::Portlet-->
	</div>
</div>
@stop
@section('page_specific_js')
@stop