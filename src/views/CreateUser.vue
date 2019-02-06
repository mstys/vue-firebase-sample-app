<template>
  <b-container>
    <h3 class="mb-4 pt-2">Create user</h3>
    <b-form @submit="onSubmit" class="form">
      <b-form-group
        id="emailInputGroup"
        label="Email address:"
        label-for="emailInput">
        <b-form-input
          id="emailInput"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="firstNameInputGroup"
        label="Your Name:"
        label-for="firstNameInput">
        <b-form-input
          id="firstNameInput"
          type="text"
          v-model="form.firstName"
          required
          placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="lastNameInputGroup"
        label="Last Name:"
        label-for="lastNameInput">
        <b-form-input
          id="lastNameInput"
          type="text"
          v-model="form.lastName"
          required
          placeholder="Enter last name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="genderGroup">
        <label class="mr-sm-2" for="genderSelectInput">Gender</label>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            @change="onSelectGeneder"
            required
            :options="{ '1': 'Male', '2': 'Female' }"
            id="genderSelectInput">
            <option slot="first" :value="null">Choose...</option>
          </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import types from '../store/types';

export default {
  name: 'create-user',
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        gender: null
      },
      options: { '1': 'Male', '2': 'Female' }
    };
  },
  methods: {
    ...mapActions({
      addUser: types.dashboard.addUser
    }),
    onSubmit(evt) {
      evt.preventDefault();
      this.addUser(this.form).then(() => {
        this.$router.push({ name: 'dashboard' });
      });
    },
    onSelectGeneder(selectedOption) {
      this.form.gender = this.options[selectedOption];
    }
  }
};
</script>

<style scoped>
.form {
  text-align: left;
}
</style>
