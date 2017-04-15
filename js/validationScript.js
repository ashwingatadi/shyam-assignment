$(document).ready(function(){
    $('#btnSubmit').click(function(){
        validateFirstName();
        validateLastName();
        validateGender();
        validateEmail();
        validatePassword();
        validateTandC();
    });

    $('#btnCancel').click(function(){
        $('#txtFirstName').val('');
        $('#txtLastName').val('');
        $('#radioMale').prop('checked', false);
        $('#radioFemale').prop('checked', false);
        $('#txtEmail').val('');
        $('#txtPassword').val('');
        $('#txtCPassword').val('');
        $('#chkagreement').prop('checked', false);

        $('#valFirstName').html("");
        $('#valLastName').html("");
        $('#valGender').html("");
        $('#valEmail').html("");
        $('#valPassword').html("");
        $('#valCPassword').html("");
        $('#valTandC').html("");

    });
});

function validateFirstName(){
    var firstname = $('#txtFirstName').val();
    if(firstname.trim()==""){
        $('#valFirstName').html("Please enter first name");
    }
    else{
        $('#valFirstName').html("");
    }
}

function validateLastName(){
     var lastname = $('#txtLastName').val();
     if(lastname.trim()==""){
        $('#valLastName').html("Please enter last name");
    }
    else{
        $('#valLastName').html("");
    }
}

function validateGender(){
    var isMale = $('#radioMale').is(':checked');
    var isFemale = $('#radioFemale').is(':checked');
    if(isMale== false && isFemale == false){
        $('#valGender').html("Please select Gender");
    }
    else{
        $('#valGender').html("");
    }
}

function validateEmail(){
    var email = $('#txtEmail').val();
    if(email.trim()==""){
        $('#valEmail').html("Please enter Email");
    }
    else{
        if(ValidateEmail(email) == true){
            $('#valEmail').html("");
        }
        else{
            $('#valEmail').html("Please enter valid Email");
        }
        
    }
}

function validatePassword(){
    var password = $('#txtPassword').val();
    if(password.trim()==""){
        $('#valPassword').html("Please enter password");
    }
    else{
        if(password.length >= 8){
            $('#valPassword').html("");
            validateConfirmPassword();
        }
        else{
            $('#valPassword').html("Password should be minimum 8 characters");
        }
        
    }
}

function validateConfirmPassword(){
    var password = $('#txtPassword').val();
    var Cpassword = $('#txtCPassword').val();
    if(password == Cpassword){
        $('#valCPassword').html("");
    }
    else{
        $('#valCPassword').html("Confirm Password should match with password");
    }
}

function validateTandC(){
    var agreement = $('#chkagreement').is(':checked');
    if(agreement== false){
        $('#valTandC').html("Please agree to terms and conditions");
    }
    else{
        $('#valTandC').html("");
    }
}

 function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};