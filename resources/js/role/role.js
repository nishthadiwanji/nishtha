var Role = function () {
    var intializeRoleElement = function () {
        $('.role-attrib-box').select2({
            minimumResultsForSearch: -1,
        }).change(function () {
            handleRoleRedirect();
        });
	}
    
    var handleRoleRedirect = function () {
        var route = [location.protocol, '//', location.host, location.pathname].join('');
        route += "?records="+$("#records").val();
        window.location.href = route;
    }
    
    var handleAddRole = function () {
        $('#addRoleForm').validate({
			rules: {
				name: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Role name is required."
				}
			}
		});
        
        $("#addRoleResetBtn").click(function () {
            resetRoleForm($("#addRoleForm"));
        });
        
		$('#addRoleBtn').click(function(e) {
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
    
    var handleRoleUpdate = function () {
        $('#updateRoleForm').validate({
			rules: {
				name: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Role name is required."
				}
			}
		});
        
        $('#updateRoleBtn').click(function(e) {
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
    
    var handleRoleDelete = function () {
      	$(".role-delete").click(function () {
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
    
    var resetRoleForm = function(form) {
        LaravelApp.resetForm(form);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
	return {
		init: function () {
      intializeRoleElement();
			handleAddRole();
			handleRoleUpdate();
			handleRoleDelete();
		}
	};
}();
jQuery(document).ready(function () {
	Role.init();
});
