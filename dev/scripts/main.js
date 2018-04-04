'use strict';

(function() {
  //zdefiniowanie zmiennych i funkcji pozwawaljacych na zmianę ikony w zależności od typu klienta
  var iconPrivateClient = document.getElementById("icon-private-client");
  var iconCompanyClient = document.getElementById("icon-company-client");
  var clientType = document.getElementById("type-of-client");
  //funkcja sprawdzająca typ klienta
  function checkClientType() {
    if (clientType.value === "private") {
      iconPrivateClient.classList.remove("hidden");
      iconCompanyClient.classList.add("hidden");
    } else {
      iconPrivateClient.classList.add("hidden");
      iconCompanyClient.classList.remove("hidden");
    }
  }
  checkClientType();
  clientType.addEventListener('change', checkClientType);



  //zdefiniowanie zmiennych potrzebnych do ustawienia widoczności etykiet nadanych klientom
  var premiumBadgeVisible = document.getElementById("premium-badge-visible");
  var premiumBadgeInvisible = document.getElementById("premium-badge-invisible");
  var premiumBadge = document.getElementById("premium-badge");
  var riskyBadgeVisible = document.getElementById("risky-badge-visible");
  var riskyBadgeInvisible = document.getElementById("risky-badge-invisible");
  var fitterBadgeVisible = document.getElementById("fitter-badge-visible");
  var fitterBadgeInvisible = document.getElementById("fitter-badge-invisible");
  var riskyBadge = document.getElementById("risky-badge");
  var fitterBadge = document.getElementById("fitter-badge");
  var premiumVisibility = document.getElementById("premium-visibility");
  var riskyVisibility = document.getElementById("risky-visibility");
  var fitterVisibility = document.getElementById("fitter-visibility");

  //funkcja umożliwiająca sprawdzenie kliknięcia checkboxa z daną etykietą
  function enableVisibilityButton(e) {
    if (this === premiumBadge) {
      if (this.checked) {
        premiumVisibility.classList.remove("disabled-icon");
        premiumVisibility.addEventListener("click", handleVisibility);
      } else {
        premiumVisibility.classList.add("disabled-icon");
        premiumVisibility.removeEventListener("click", handleVisibility);
      }
    } else if (this === riskyBadge) {
      if (this.checked) {
        riskyVisibility.classList.remove("disabled-icon");
        riskyVisibility.addEventListener("click", handleVisibility);
      } else {
        riskyVisibility.classList.add("disabled-icon");
        riskyVisibility.removeEventListener("click", handleVisibility);
      }
    } else {
      if (this.checked) {
        fitterVisibility.classList.remove("disabled-icon");
        fitterVisibility.addEventListener("click", handleVisibility);
      } else {
        fitterVisibility.classList.add("disabled-icon");
        fitterVisibility.removeEventListener("click", handleVisibility);
      }
    }
  }

  //funkcja umożliwaijąca wybór widoności etykiety klienta
  function handleVisibility() {
    if (this.id === "premium-visibility") {
      premiumBadgeVisible.classList.toggle("hidden");
      premiumBadgeInvisible.classList.toggle("hidden");
    } else if (this.id === "risky-visibility") {
      riskyBadgeVisible.classList.toggle("hidden");
      riskyBadgeInvisible.classList.toggle("hidden");
    } else if (this.id === "fitter-visibility") {
      fitterBadgeVisible.classList.toggle("hidden");
      fitterBadgeInvisible.classList.toggle("hidden");
    }
  }

  //addEventListenery dla etykiet
  premiumBadge.addEventListener("change", enableVisibilityButton);
  riskyBadge.addEventListener("change", enableVisibilityButton);
  fitterBadge.addEventListener("change", enableVisibilityButton);



  //zdefiniowanie zmiennych koniecznych do zapisu komentarza w tabeli
  var saveCommentButton = document.getElementById("save-comment");
  var commentUser = document.getElementById("comment-user");
  var commentContent = document.getElementById("comment-content");
  var commentTable = document.getElementById("comment-table");

  //funkcja umożliwiająca zapisanie danych w tabeli na podstawie wypełnionego popupa
  function addComment() {
    var modal = document.getElementById("modal-example-email");
    if (commentUser.value === "" && commentContent.value === "") {
      commentUser.classList.add("uk-form-danger");
      commentContent.classList.add("uk-form-danger");
    }
    else if (commentUser.value === "" && commentContent.value !== "") {
      commentUser.classList.add("uk-form-danger");
      commentContent.classList.remove("uk-form-danger");
    }
    else if (commentUser.value === "" && commentContent.value != "") {
      commentUser.classList.add("uk-form-danger");
      commentContent.classList.remove("uk-form-danger");
    }
    else if (commentUser.value !== "" && commentContent.value === "") {
      commentUser.classList.remove("uk-form-danger");
      commentContent.classList.add("uk-form-danger");
    }
    else {
      var d = new Date();
      var day = d.getDate();
      if (day < 10) {
        day = '0' + day
      };
      var month = d.getMonth() + 1;
      if (month < 10) {
        month = '0' + month
      };
      var newRow = commentTable.insertRow(commentTable.rows.length);
      var newCell1 = newRow.insertCell(0);
      var newText1 = document.createTextNode(commentUser.value);
      newCell1.appendChild(newText1);
      var newCell2 = newRow.insertCell(1);
      var newText2 = document.createTextNode(day + '-' + month + '-' + d.getFullYear());
      newCell2.appendChild(newText2);
      var newCell3 = newRow.insertCell(2);
      var newText3 = document.createTextNode(commentContent.value);
      newCell3.appendChild(newText3);
      var newCell4 = newRow.insertCell(3);
      var trashButton = document.createElement("a");
      trashButton.setAttribute("href", "#");
      trashButton.setAttribute("uk-icon", "trash");
      trashButton.classList.add("uk-icon-button");
      newCell4.appendChild(trashButton);
      commentUser.value="";
      commentContent.value="";
      commentUser.classList.remove("uk-form-danger");
      commentContent.classList.remove("uk-form-danger");
      UIkit.modal(modal).hide();
    }
  }

  //addEventListener dla przycisku zatwierdzającego nowy komentarz
  saveCommentButton.addEventListener("click", addComment);


  //definicja zmiennych umożliwiajacych zmianę ikon dla adresów
  var defaultDelivery = document.getElementById("default-delivery");
  var defaultDeliveryCheck = document.getElementById("default-delivery-check");
  var defaultDeliveryClose = document.getElementById("default-delivery-close");
  var defaultInvoice = document.getElementById("default-invoice");
  var defaultInvoiceCheck = document.getElementById("default-invoice-check");
  var defaultInvoiceClose = document.getElementById("default-invoice-close");
  //funkcja zmieniająca ikony dla adresów
  function toggleDefaultDelivery() {
    defaultDeliveryCheck.classList.toggle("hidden");
    defaultDeliveryClose.classList.toggle("hidden");
  }
  function toggleDefaultInvoice() {
  defaultInvoiceCheck.classList.toggle("hidden");
  defaultInvoiceClose.classList.toggle("hidden");
  }
  //addEventListener oczekujacy na zmiane ikony przez uzytkownika
  defaultDelivery.addEventListener("click", toggleDefaultDelivery);
  defaultInvoice.addEventListener("click", toggleDefaultInvoice);



  //zdefiniowanie tablicy składającej się ze wszystkich inputów
  var allInputs = Array.prototype.slice.call(document.querySelectorAll("input"));
  console.log(allInputs);
  for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('blur', validate);
  }

  //funkcja walidacji formularzów zawierająca opcję sprawdzenia ważnosci wybranego pola oraz sprawdzenie poprawności z wykorzystaniem wyrażenia regularnego
  function validate(e) {
    if (this.required && this.value === "") {
      this.classList.add("uk-form-danger");
    } else if (this.type === "tel") {
      var pattern = /^(?:\(?\+?48)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
      if (pattern.test(this.value)) {
        this.classList.remove("uk-form-danger");
      } else {
        this.classList.add("uk-form-danger");
      }
    } else if (this.type === "email") {
      var patternEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
      if (patternEmail.test(this.value)) {
        this.classList.remove("uk-form-danger");
      } else {
        this.classList.add("uk-form-danger");
      }
    } else if (this.name === "NIP") {
      var patternNip = /[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/g;
      if (patternNip.test(this.value)) {
        this.classList.remove("uk-form-danger");
      } else {
        this.classList.add("uk-form-danger");
      }
    } else if (this.name === "post-code") {
      var patternPost= /[0-9]{2}-[0-9]{3}/g;
      if (patternPost.test(this.value)) {
        this.classList.remove("uk-form-danger");
      } else {
        this.classList.add("uk-form-danger");
      }
    } else {
      this.classList.remove("uk-form-danger");
    }
  }

})();
