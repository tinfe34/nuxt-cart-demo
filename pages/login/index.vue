<template>
  <section>
    <div class="max-w-lg shadow-2xl md:mx-auto bg-white tex my-20 mx-5">
      <div class="p-20 pt-10">
        <nuxt-link to="/" class="flex items-center justify-center my-5">
          <img
            src="~/assets/img/logo-udemy.svg"
            class="h-16"
            alt="logo-udemy"
          />
        </nuxt-link>
        <form @submit.prevent="submitForm">
          <!-- Email input -->
          <div class="mb-6">
            <input
              v-model="state.email"
              @blur="v$.email.$touch"
              type="text"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
              :class="{
                'border-red-500 focus:border-red-500': v$.email.$error,
                'border-[#42d392] ': !v$.email.$invalid,
              }"
              placeholder="Email address"
            />
            <p
              v-if="v$.email.$error"
              class="mt-2 peer-invalid:visible text-red-600 text-sm"
            >
            {{ v$.email.$errors[0].$message }}
            </p>
          </div>

          <!-- Password input -->
          <div class="mb-6">
            <input
              v-model="state.password"
              @blur="v$.password.$touch"
              type="password"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
              :class="{
                'border-red-500 focus:border-red-500 invalid:text-red-600':
                  v$.password.$error,
                'border-[#42d392] ': !v$.password.$invalid,
              }"
              placeholder="Password"
            />
            <p
              v-if="v$.password.$error"
              class="mt-2 peer-invalid:visible text-red-600 text-sm"
            >
            {{ v$.password.$errors[0].$message }}
            </p>
          </div>
          <!-- ConfirmPassword input -->
          <div class="mb-6">
            <input
              v-model="state.confirmPassword"
              @blur="v$.confirmPassword.$touch"
              type="password"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
              :class="{
                'border-red-500 focus:border-red-500':
                  v$.confirmPassword.$error,
                'border-[#42d392] ': !v$.confirmPassword.$invalid,
              }"
              placeholder="Confirm Password"
            />
            <p
              v-if="v$.confirmPassword.$error"
              class="mt-2 peer-invalid:visible text-red-600 text-sm"
            >
              {{ v$.confirmPassword.$errors[0].$message }}
            </p>
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-800 checked:border-purple-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck3"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a
              class="text-purple-800 hover:text-purple-800 focus:text-purple-800 active:text-purple-800 duration-200 transition ease-in-out"
              >Forgot password?</a
            >
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-purple-800 outline-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <a
            class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style="background-color: #3b5998"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <!-- Facebook -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-3.5 h-3.5 mr-2"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              /></svg>
              Continue with Facebook
          </a>
          <a
            class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
            style="background-color: #55acee"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <!-- Twitter -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-3.5 h-3.5 mr-2"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              /></svg>Continue with Twitter
          </a>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";

definePageMeta({
  middleware: "auth",
  layout: "full-page",
});

const state = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAs: sameAs(state.password) },
  };
});

const v$ = useVuelidate(rules, state);
const router = useRouter();

const submitForm = () => {
  v$.value.$validate();
  if (v$.value.$invalid) return;

  window.localStorage.setItem("isLoggedIn", JSON.stringify(state));
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped></style>
