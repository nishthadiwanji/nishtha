var Product = function()
{
    var handleAddProduct = function () {
        $('#productForm').validate({
			rules: {
				product_name: {
					required: true
				},
                description: {
                    required: true
                }
			},
			messages: {
				product_name: {
					required: "Product name is required."
				},
                description: {
                    required: "Description is required."
                }
			}
		});
        
        $("#addProductResetBtn").click(function () {
            resetProductForm($("#productForm"));
        });
        
		$('#addProductBtn').click(function(e) {
            e.preventDefault();
            var btn = $(this);
            var form = $(this).closest('form');

            if (!form.valid()) {
                return;
            }

            LaravelApp.disableButtonWithLoading(btn);
            $.post(form.attr("data-action"), form.serialize())
                .done(function (data) {
                    LaravelApp.displayResultAndReload(data, function () {
                        LaravelApp.enableButton(btn);
                    }, function () {
                        LaravelApp.enableButton(btn);
                    });
                }).fail(function (data) {
                    LaravelApp.displayFailedValidation(data);
                    LaravelApp.enableButton(btn);
                });
        });
	}
    var handProductUpdate = function () {
        $('#updateProductForm').validate({
			rules: {
				product_name: {
					required: true
				},
                description: {
                    required: true
                }
			},
			messages: {
				product_name: {
					required: "Product name is required."
				},
                description: {
                    required: "Description is required."
                }
			}
		});
        
        $('#updateProductBtn').click(function(e) {
            e.preventDefault();
            var btn = $(this);
            var form = $(this).closest('form');

            if (!form.valid()) {
                return;
            }

            LaravelApp.disableButtonWithLoading(btn);
            $.put(form.attr("data-action"), form.serialize())
                .done(function (data) {
                    LaravelApp.displayResultWithCallback(data, function () {
                        var referrer = document.referrer;
                            if (!referrer) {
                                window.location.href = form.attr("data-redirect-url");
                            } else {
                                window.location.href = referrer;
                            }
                        LaravelApp.enableButton(btn);
                    }, function () {
                        LaravelApp.enableButton(btn);
                    });
                }).fail(function (data) {
                    LaravelApp.displayFailedValidation(data);
                    LaravelApp.enableButton(btn);
                });
        });
	}
    var resetProductForm = function(form) {
        LaravelApp.resetForm(form);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
    var handleProductDelete = function () {
        $(".product-delete").click(function () {
      var btn = $(this);
      swal.fire({
      title: "Are you sure?",
      text: "You want to delete this role.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, remove it!",
      closeOnConfirm: false,
      showLoaderOnConfirm: true
      }).then(function(result){
         if (result.value) {
             $.delete(btn.attr('data-action'))
                 .done(function (data) {
                     if (data.result == true) {
                         swal.fire({
                             title: data.title,
                             text: data.message,
                             type: "success",
                             timer: 1000,
                             showConfirmButton: false
                         });
                         if (btn.closest('tr').length > 1) {
                             btn.closest('tr').remove();
                         } else {
                             window.location.href = window.location.href;
                         }
                     } else {
                         swal.fire({
                             title: data.title,
                             text: data.message,
                             type: "error",
                             //timer: 1000,
                             showConfirmButton: true
                         });
                     }
                 });
             }
         });
      });
  }
    return {
		init: function () {
            handleAddProduct();
            handProductUpdate();
            handleProductDelete();
		}
	};
}();
jQuery(document).ready(function () {
	Product.init();
});