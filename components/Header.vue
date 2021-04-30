<template>
  <header>
    <nav>
      <h1>
        <a href="/">
          <img
            src="~/assets/images/logo.png"
            alt="Caron Construction & Roofing"
          />
        </a>
      </h1>
      <ul class="nav-links" ref="navLinks">
        <li v-on:click="navItemClicked()"><NuxtLink to="/">Home</NuxtLink></li>
        <li v-on:click="navItemClicked()">
          <NuxtLink to="/about">About Us</NuxtLink>
        </li>
        <li v-on:click="navItemClicked()">
          <NuxtLink to="/photo-gallery">Photos</NuxtLink>
        </li>
        <li v-on:click="navItemClicked()">
          <NuxtLink to="/recent-projects">Projects</NuxtLink>
        </li>
        <!-- <li v-on:click="navItemClicked()">
          <NuxtLink to="/services">Services</NuxtLink>
        </li> -->
        <li v-on:click="navItemClicked()">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
      <button
        class="bt-menu"
        title="Menu"
        v-on:click="onMenuClick()"
        ref="menuIcon"
      >
        <span class="hamburger">
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    onMenuClick() {
      this.$refs.navLinks.classList.toggle('mobile-active')
      document.body.classList.toggle('menu-open')
    },
    navItemClicked() {
      if (document.body.classList.contains('menu-open')) {
        this.onMenuClick()
        return
      }
    },
  },
}
</script>

<style lang="scss">
$hamburger-button-size: 50px;
$hamburger-button-radius: 4px;
$hamburger-bar-color: var(--primary-color);
$hamgurger-bar-width: 32px;
$hamgurger-bar-height: 5px;
$hamgurger-bar-spacing: 5px;
$hamgurger-transition-speed: 0.4s;

nav {
  font-family: 'Bebas Neue', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // min-height: 8vh;
  background-color: white;
  padding: 0 1rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.nav-links {
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  width: 50%;
}
.nav-links li {
  list-style: none;
  transition: all 0.5s ease-out;
  font-size: 1.5rem;
}
.nav-links li:hover {
  color: var(--primary-color);
}

.nav-links a {
  text-decoration: none;
  color: #333;
  display: inline block;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: color 0.5s ease-out;
}
.nav-links a:hover {
  color: var(--primary-color);
}

.bt-menu {
  display: none;
}

/* Media Queries - Tablet*/
@media screen and (max-width: 1264px) {
  .nav-links {
    width: 100%;
  }
}
/* Media Queries - Mobile*/
@media screen and (max-width: 864px) {
  .nav-links {
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    display: flex;
    height: 0;
    width: 0;
    background-color: #f0ece2;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: opacity 0.5s ease-in-out;
    z-index: 15;
  }

  .mobile-active {
    display: flex;
    transform: translateX(0%);
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    padding: 0;
  }

  .bt-menu {
    align-self: flex-start;
    margin-top: 1rem;
    position: relative;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    border-radius: $hamburger-button-radius;
    width: $hamburger-button-size;
    height: $hamburger-button-size;
    transition: $hamgurger-transition-speed / 2;
    display: block;
    z-index: 30;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: scale(0.9);
    }

    &:active,
    &:focus {
      outline: none;
    }

    .hamburger {
      width: $hamgurger-bar-width;
      height: ($hamgurger-bar-height * 3) + ($hamgurger-bar-spacing * 2);
      transition: $hamgurger-transition-speed;

      &,
      .bar {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }

      .bar {
        width: $hamgurger-bar-width;
        height: $hamgurger-bar-height;
        background: $hamburger-bar-color;
        transition: $hamgurger-transition-speed / 2;
        outline: 1px solid transparent;
      }

      .bar-1 {
        transform: rotate(0) translate3d(0, -($hamgurger-bar-height * 2), 0);
      }

      .bar-3 {
        transform: rotate(0) translate3d(0, ($hamgurger-bar-height * 2), 0);
      }

      .menu-open & {
        transform: rotate(180deg);

        .bar-1 {
          transform: rotate(45deg) translate3d(0, 0, 0);
        }
        .bar-2 {
          opacity: 0;
        }
        .bar-3 {
          transform: rotate(-45deg) translate3d(0, 0, 0);
        }
      }
    }
  }
}
</style>
