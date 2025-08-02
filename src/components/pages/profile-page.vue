<template>
  <div class="container">
    <div v-if="loading" class="loading">Загрузка данных...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="profile">
      <div class="profile__photo">
        <img src="/img/profile_23.png" alt="profile_23" class="profile__img" />
      </div>
      <div class="profile__data">
        <h2 class="profile__title">Личный кабинет</h2>
        <div class="profile__info">
          <div class="profile__field">
            <span class="profile__label">Имя:</span>
            <span class="profile__value">{{ user?.name }}</span>
          </div>
          <div class="profile__field">
            <span class="profile__label">Email:</span>
            <span class="profile__value">{{ user?.email }}</span>
          </div>
          <div class="profile__field">
            <span class="profile__label">Баланс:</span>
            <span class="profile__value">{{ user?.balance }} ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useUserService } from '@/service/user-service-api'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/types/Route-names'
import { useUserStore } from '@/stores/user-store'
import { IUser } from '@/types/user'

/**
 * Инициализация роутера для навигации между страницами.
 * @type {Router}
 */
const router = useRouter()

/**
 * Реактивная переменная для отслеживания состояния загрузки.
 * @type {Ref<boolean>}
 */
const loading = ref(true)

/**
 * Реактивная переменная для хранения сообщения об ошибке.
 * @type {Ref<string | null>}
 */
const error = ref<string | null>(null)
const user =  ref<IUser | null>(null)

/**
 * Асинхронная функция для загрузки данных пользователя.
 * Пробует получить ID с сервера, затем из localStorage, загружает данные пользователя, обрабатывает ошибки и обновляет состояние загрузки.
 * @function loadUserData
 */
const loadUserData = async () => {
  try {
    // Пробуем получить ID с сервера
    const { getCurrentUser } = useUserStore();
    const serverUserId = await getCurrentUser();

    // Если с сервера не получили, пробуем из localStorage
    const localUserId = Number(localStorage.getItem('userId'));

    const userId = serverUserId || localUserId;

    if (!userId) {
      router.push({ name: RouteNames.Login });
      return;
    }

    // Если получили ID с сервера, но он отличается от localStorage - обновим localStorage
    if (serverUserId && serverUserId !== localUserId) {
      localStorage.setItem('userId', serverUserId.toString());
    }

    // Загружаем данные пользователя
    const { getUser } = useUserService();
    await getUser(userId);

    error.value = null;
  } catch (err) {
    // Установка сообщения об ошибке в случае неудачи.
    error.value = 'Ошибка при загрузке данных пользователя';
    console.error(err);
    // Перенаправление на страницу ошибки с сообщением
    router.push({
      name: RouteNames.Error,
      query: {
        message: 'Не удалось загрузить данные профиля',
        redirectTo: RouteNames.Profile,
      },
    });
  } finally {
    // Обновление состояния загрузки после завершения попытки загрузки данных.
    loading.value = false;
  }
}

onMounted(loadUserData)
</script>


<style lang="scss">
@use '@/scss/colors' as *;

.profile {
  display: flex;
  gap: 40px;
  padding: 30px;
  margin: 20px auto;
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0 4px 15px $shadow-light;

  &__photo {
    flex: 0 0 250px;

    .profile__img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  &__data {
    flex: 1;
  }

  &__title {
    font-size: 24px;
    color: $text-dark;
    margin-bottom: 25px;
    font-weight: 600;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__field {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid $border-gray;
  }

  &__label {
    flex: 0 0 150px;
    font-weight: 500;
    color: $text-gray;
  }

  &__value {
    flex: 1;
    color: $text-dark;
    font-weight: 600;
  }
}

.loading,
.error {
  padding: 20px;
  text-align: center;
  font-size: 18px;
}

.error {
  color: red;
}
</style>
