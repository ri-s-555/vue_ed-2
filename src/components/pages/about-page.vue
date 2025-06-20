<template>
  <div class="about-page">
    <div class="about-page__header">
      <h1 class="about-page__title">О нашем проекте</h1>
    </div>

    <div class="about-page__content">
      <div class="about-page__photo">
        <img src="/img/cat cart.png" alt="We are" class="about-page__photo"/>
      </div>

      <div class="about-page__info">
        <p class="about-page__text">Сайт разработан в рамках учебного проекта студентами</p>
        <p class="about-page__text">Факультета математики и естественнонаучного образования</p>
        <p class="about-page__text">Группа 02042308</p>

        <div class="about-page__students">
          <p class="about-page__student">Соболева Марина Сергеевна</p>
          <p class="about-page__student">Щёголев Александр Валерьевич</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.about-page {
  $self: &;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;

  &__header {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 2.5rem;
    color: #2c3e50;
    font-weight: 600;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: #42b983;
    }
  }

  &__content {
    display: flex;
    gap: 5rem;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
    }
  }

  &__photo {
    flex: 1;
    min-width: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__photo-placeholder {
    width: 100%;
    height: 400px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-size: 1.2rem;
    border: 2px dashed #ccc;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e9e9e9;
      border-color: #42b983;
    }
  }

  &__info {
    flex: 1;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #42b983;
      font-weight: bold;
    }
  }

  &__students {
    margin-top: 3rem;
    padding-left: 2rem;
    border-left: 3px solid #42b983;
  }

  &__student {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #2c3e50;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #42b983;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

