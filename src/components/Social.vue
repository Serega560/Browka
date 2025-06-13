<script setup>
import WhatsappIcon from '@/assets/icons/whatsapp.svg'
import Vk from '@/assets/icons/vk.svg'
</script>

<template>
  <ul class="header__social social">
    <li class="social__item social__item--telegram">
      <a href="https://t.me/katerina_browka">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <use xlink:href="#icon-telegram" />
        </svg>
      </a>
    </li>
    <li class="social__item social__item--whatsapp">
      <a href="https://wa.me/79261283908" target="_blank">
        <WhatsappIcon />
      </a>
    </li>
    <li class="social__item social__item--vk">
      <a href="https://vk.com/ekaterinabrowka">
        <Vk />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media.scss' as *;

.social {
  display: flex;
  gap: 0 3px;

  @include vp-767 {
    gap: 0 8px;
    order: -1;
  }

  .social__item {
    cursor: pointer;

    a {
      padding: 14px 8px;
      transition: all 0.3s ease-in-out;

      &:hover {
        svg {
          transform: scale(1.1);
        }
      }

      @include vp-767 {
        padding: 3px 2px;
      }

      svg {
        width: 40px;
        height: 40px;
        transition: color .3s;
      }
    }
  }

  .social__item--telegram {
    a {

      svg {
        color: var(--color-summer-sky);
      }

      //&:hover {
      //  svg {
      //    color: var(--color-scooter);
      //  }
      //}

      &:active {
        svg {
          color: var(--color-sky-blue);
        }
      }
    }
  }

  .social__item--whatsapp {
    a {

      svg {
        color: var(--color-lime-green);
      }

      //&:hover {
      //  svg {
      //    color: var(--color-fruit-salad);
      //  }
      //}

      &:active {
        svg {
          color: var(--color-pastel-green);
        }
      }
    }
  }

  .social__item--vk {
    a {

      svg {
        color: var(--color-havelock-blue);
      }

      //&:hover {
      //  svg {
      //    color: var(--color-wedgewood);
      //  }
      //}

      &:active {
        svg {
          color: var(--color-jordy-blue);
        }
      }
    }
  }
}

</style>
