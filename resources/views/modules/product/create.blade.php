<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@lang('product.add_product')</title>

    </head>
    <body class="antialiased">
		<form class="kt-form" id="productForm" name="productForm" data-action="{{route('product.store')}}" data-redirect-url="{{route('product.create')}}" onsubmit="return false;">
			<div class="kt-portlet__body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group kt-form__group">
							<label class="control-label"> @lang('product.product_name') </label>
							<span class="required">*</span>
							<input type="text" name="product_name" class="form-control" placeholder="@lang('product.enter_product')">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group kt-form__group">
							<label class="control-label"> @lang('product.product_desc') </label>
							<span class="required">*</span>
							<textarea id="description" name="description" rows="4" cols="50" class="form-control" placeholder="@lang('product.enter_desc')"></textarea>
						</div>
					</div>
				</div>                    
			</div>
			<div class="kt-portlet__foot">
				<div class="kt-form__actions">
					<div class="row">
						<div class="col-md-6">
							<button class="btn btn-primary ats-submit" id="addProductBtn">
								Save
							</button>
							<button type="reset" class="btn btn-outline-danger" id="addProductResetBtn">Reset</button>
						</div>
					</div>
				</div>
			</div>
		</form>
    </body>
</html>