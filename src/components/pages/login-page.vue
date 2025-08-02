<template>
  <!-- <div class="login-page container">
    <h1>Personal account</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <div class="form-group">
          <input type="text" id="username" v-model="username" placeholder="Username" required />
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" placeholder="Password" required />
        </div>
      </div>

      <mainButton @click="redirectToProfile" title="Login" />
    </form>
  </div> -->


  <div class="login-page container">
    <h1>{{ isLogin ? 'Вход' : 'Регистрация' }}</h1>
    <form @submit.prevent="isLogin ? handleLogin : handleRegister">
      <div v-if="!isLogin" class="form-group">
        <label for="username">Имя пользователя</label>
        <input type="text" id="username" v-model="username" placeholder="Имя пользователя" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password" placeholder="Пароль" required />
      </div>
      <div v-if="!isLogin" class="form-group">
        <label for="confirmPassword">Подтвердите пароль</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Подтвердите пароль" required />
      </div>
      <mainButton :title="isLogin ? 'Войти' : 'Зарегистрироваться'" :disabled="loading" />
    </form>
    <button @click="toggleForm">
      {{ isLogin ? 'Нужна учетная запись? Зарегистрироваться' : 'Уже есть учетная запись? Войти' }}
    </button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>




    <!-- <div class="login-page container">
    <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>
    <form @submit.prevent="isLogin ? handleLogin : handleRegister">
      <div v-if="!isLogin" class="form-group">
        <input type="text" id="username" v-model="username" placeholder="Username" required />
      </div>
      <div class="form-group">
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>
      <div v-if="!isLogin" class="form-group">
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password" required />
      </div>
      <mainButton :title="isLogin ? 'Login' : 'Register'" />
    </form>
    <button @click="toggleForm">{{ isLogin ? 'Need an account? Register' : 'Already have an account? Login' }}</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div> -->
</template>

<script lang="ts" setup>
// import mainButton from '@/components/ui/main-button.vue'
// import { useRouter } from 'vue-router'
// import { ref } from 'vue'

// const router = useRouter()
// const username = ref('')
// const password = ref('')
// const redirectToProfile = () => {
//   router.push({ name: 'Profile' })
// }
// const handleSubmit = () => {
//   console.log('Username:', username.value)
//   console.log('Password:', password.value)
// }

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import mainButton from '@/components/ui/main-button.vue';
import { API_URL } from '@/service/api';

const router = useRouter();
const isLogin = ref(true);
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const loading = ref(false);

const toggleForm = () => {
  isLogin.value = !isLogin.value;
  errorMessage.value = '';
};

const handleLogin = async () => {
  loading.value = true;
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка входа');
    }

    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    router.push({ name: 'Profile' });
  } catch (error) {
    errorMessage.value = 'Не удалось войти. Пожалуйста, проверьте свои учетные данные.';
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Пароли не совпадают.';
    return;
  }

  loading.value = true;
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка регистрации');
    }

    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    router.push({ name: 'Profile' });
  } catch (error) {
    errorMessage.value = 'Не удалось зарегистрироваться. Пожалуйста, попробуйте снова.';
    console.error(error);
  } finally {
    loading.value = false;
  }
};




// /**
//  * Инициализация роутера для навигации между страницами.
//  * @type {Router}
//  */
// const router = useRouter();

// /**
//  * Реактивная переменная, определяющая, отображается ли форма входа или регистрации.
//  * @type {import('vue').Ref<boolean>}
//  */
// const isLogin = ref(true);

// /**
//  * Реактивная переменная для хранения имени пользователя.
//  * @type {import('vue').Ref<string>}
//  */
// const username = ref('');

// /**
//  * Реактивная переменная для хранения электронной почты пользователя.
//  * @type {import('vue').Ref<string>}
//  */
// const email = ref('');

// /**
//  * Реактивная переменная для хранения пароля пользователя.
//  * @type {import('vue').Ref<string>}
//  */
// const password = ref('');

// /**
//  * Реактивная переменная для хранения подтверждения пароля пользователя.
//  * @type {import('vue').Ref<string>}
//  */
// const confirmPassword = ref('');

// /**
//  * Реактивная переменная для хранения сообщения об ошибке.
//  * @type {import('vue').Ref<string>}
//  */
// const errorMessage = ref('');

// /**
//  * Переключает форму между режимами входа и регистрации.
//  * @function toggleForm
//  */
// const toggleForm = () => {
//   isLogin.value = !isLogin.value;
//   errorMessage.value = '';
// };

// /**
//  * Обрабатывает отправку формы входа.
//  * Отправляет данные на сервер для аутентификации пользователя.
//  * @async
//  * @function handleLogin
//  */
// const handleLogin = async () => {
//   try {
//     /**
//      * Отправка запроса на сервер для входа пользователя.
//      * @constant {Response} response - Ответ от сервера.
//      */
//     const response = await fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: email.value,
//         password: password.value,
//       }),
//     });

//     /**
//      * Проверка успешности ответа от сервера.
//      */
//     if (!response.ok) {
//       throw new Error('Login failed');
//     }

//     /**
//      * Получение данных ответа от сервера.
//      * @constant {Object} data - Данные ответа.
//      */
//     const data = await response.json();

//     /**
//      * Сохранение токена в localStorage.
//      */
//     localStorage.setItem('token', data.accessToken);

//     /**
//      * Перенаправление пользователя на страницу профиля.
//      */
//     router.push({ name: 'Profile' });
//   } catch (error) {
//     /**
//      * Установка сообщения об ошибке в случае неудачи.
//      */
//     errorMessage.value = 'Failed to login. Please check your credentials.';
//     console.error(error);
//   }
// };

// /**
//  * Обрабатывает отправку формы регистрации.
//  * Отправляет данные на сервер для регистрации нового пользователя.
//  * @async
//  * @function handleRegister
//  */
// const handleRegister = async () => {
//   /**
//    * Проверка совпадения паролей.
//    */
//   if (password.value !== confirmPassword.value) {
//     errorMessage.value = 'Passwords do not match.';
//     return;
//   }

//   try {
//     /**
//      * Отправка запроса на сервер для регистрации нового пользователя.
//      * @constant {Response} response - Ответ от сервера.
//      */
//     const response = await fetch(`${API_URL}//register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username.value,
//         email: email.value,
//         password: password.value,
//       }),
//     });

//     /**
//      * Проверка успешности ответа от сервера.
//      */
//     if (!response.ok) {
//       throw new Error('Registration failed');
//     }

//     /**
//      * Получение данных ответа от сервера.
//      * @constant {Object} data - Данные ответа.
//      */
//     const data = await response.json();

//     /**
//      * Сохранение токена в localStorage.
//      */
//     localStorage.setItem('token', data.accessToken);

//     /**
//      * Перенаправление пользователя на страницу профиля.
//      */
//     router.push({ name: 'Profile' });
//   } catch (error) {
//     /**
//      * Установка сообщения об ошибке в случае неудачи.
//      */
//     errorMessage.value = 'Failed to register. Please try again.';
//     console.error(error);
//   }
// };


</script>

<style lang="scss">
@use '@/scss/colors' as *;
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 17px;
  text-align: center;
  border: 1px solid $border-transparent;
  border-radius: 4px;
}

.error-message {
  color: red;
}
</style>
