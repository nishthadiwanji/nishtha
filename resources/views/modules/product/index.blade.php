<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@lang('product.list_product_name')</title>

    </head>
    <body class="antialiased">
        <table class="table table-bordered table-hover">
			<thead class="thead-light">
				<tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Created at</th>
                    <th>Action</th>
				</tr>
			</thead>
			<tbody>
                @forelse($products as $product)
				<tr>
					<td>{{$product->product_name}}</td>
					<td>{{$product->description}}</td>
					<td>{{$product->created_at}}</td>
					<td>
						<a class="label label-primary" href="{{route('product.edit',[$product->id_token])}}"><i class="fa fa-edit" title="edit product"></i></a> &nbsp; 
						<a class="text-danger label label-danger product-delete" href="javascript:;" data-action="{{route('product.destroy',$product->id_token)}}"><i class="fa fa-trash" title="delete product"></i></a>
					</td>
				</tr>
				@empty
				<tr>
					<td colspan="3" align="center">@lang('product.product_search_not_found')</td>
				</tr>
				@endforelse
			</tbody>
		</table>
    </body>
</html>