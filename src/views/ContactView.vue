<template>
  <div>
    <Navbar />
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center text-dark bg-light">
                <h2 class="section-heading text-uppercase">Contact Us</h2>
            </div>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                             <!-- Name input--> 
                            <input class="form-control" id="name" type="text" placeholder="Nama Kamu *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="name:required">Nama Diperlukan.</div>
                        </div>
                        <div class="form-group">
                             <!-- Email address input--> 
                            <input class="form-control" id="email" type="email" placeholder="Email Kamu *" data-sb-validations="required,email" />
                            <div class="invalid-feedback" data-sb-feedback="email:required">Email Diperlukan.</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Email Tidak Valid.</div>
                        </div>
                        <div class="form-group mb-md-0">
                             <!-- Phone number input--> 
                            <input class="form-control" id="phone" type="tel" placeholder="No Hp Kamu *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="phone:required">Nomor Hp Diperlukan.</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                             <!-- Message input--> 
                            <textarea class="form-control" id="message" placeholder="Pesan Kamu *" data-sb-validations="required"></textarea>
                            <div class="invalid-feedback" data-sb-feedback="message:required">Pesan Diperlukan.</div>
                        </div>
                    </div>
                </div>
                 <!-- Submit success message--> 
                 <!----> 
                 <!-- This is what your users will see when the form--> 
                 <!-- has successfully submitted--> 
                <div class="d-none" id="kirimPesanSukses">
                    <div class="text-center text-white mb-3">
                        <div class="fw-bolder">Pengiriman Berhasil!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                 <!-- Submit error message--> 
                 <!----> 
                 <!-- This is what your users will see when there is--> 
                 <!-- an error submitting the form--> 
                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                 <!-- Submit Button--> 
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Kirim Pesan</button></div>
            </form>
        </div>
    </section>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ContactView",
  components: {
    Navbar,
  },
};
</script>