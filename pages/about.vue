<template>
  <div>
    <SubHeader
      title="About Us"
      image="https://images.unsplash.com/photo-1601284953533-6cadbbebb347?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div class="page-container">
      <section class="wwa">
        <div class="two-column">
          <h3 class="span-full">Who We Are</h3>
          <p class="span-full">
            Caron Roofing & Construction is family Owned and Operated. We
            operate year round offering roofing systems, gutters, siding,
            complete new construction services, and related products and
            services. We are your full service Commercial, Residential &
            Industrial Roofing Contractor.
          </p>
        </div>
      </section>
      <section class="wwd">
        <svg
          class="separator"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="64"
          viewBox="0.5 0.2 176 30"
          preserveAspectRatio="none"
        >
          <g transform="translate(-13.668562,-111.38266)">
            <path
              style="fill: #494949"
              d="M 13.898015,111.51495 H 190.83044 v 26.19241 l -45.97036,-14.43255 -42.22858,7.48354 -45.970361,-14.96709 -31.003265,16.03617 z"
            />
          </g>
        </svg>

        <div class="two-column">
          <h3 class="span-full">What We Do</h3>
          <div>
            <p>
              From the initial estimate to the finished job, We guarantee
              unparalleled customer service. Plus, we promise you creative
              designs/ideas, attention to detail, exceptional workmanship and
              the highest-quality building products. Your home should be a
              treasured investment, one designed to reflect your needs and your
              lifestyle. Choose a company with a longstanding, deserved
              reputation for satisfied customers and quality services.
            </p>
            <p>
              Caron Construction offers each customer a creative, personalized
              home that fits within the established budget. We begin
              construction only after one-on-one meetings with customers to
              determine individual lifestyles, character, personal tastes – and
              even dreams. From practical floor plans designed to maximize
              space…to graceful arches and whirlpool tubs created to enhance
              beauty and comfort, and whatever changes and ideas you have along
              the way your Caron Construction job will be an investment you’ll
              treasure. Our deserved reputation as a quality building/roofing
              contractor is illustrated by our customers’ continued
              satisfaction.
            </p>
            <p>
              We offer references from both past and present customers, show you
              previous jobs we have completed to be sure you know what your
              going to get, or tour current projects so you can appreciate the
              exceptional workmanship we guarantee.
            </p>
            <p>We Never Rest On Reputation – We Just Build On It!</p>
          </div>
          <ImageWrapper
            height="600px"
            alt="Photo of a roof in the rain"
            image="https://images.unsplash.com/photo-1563174499-c1a4e1aa55ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </section>
      <section>
        <svg
          class="separator"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="64"
          viewBox="0.5 0.2 176 30"
          preserveAspectRatio="none"
        >
          <g transform="translate(-13.668562,-111.38266)">
            <path
              style="fill: #ececec"
              d="M 13.898015,111.51495 H 190.83044 v 26.19241 l -45.97036,-14.43255 -19.22858,7.48354 -45.970361,-14.96709 -31.003265,16.03617 z"
            />
          </g>
        </svg>
        <div class="two-column">
          <h3 class="span-full">Services</h3>
          <ImageWrapper
            height="600px"
            alt="Photo of a roof in the rain"
            image="https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=613&q=80"
          />
          <div>
            <p>
              At Caron Construction, we are not confined to one aspect of the
              construction process. We are adept and experienced in many areas.
              Here are a list of just a few of the services we provide.
            </p>
            <ul>
              <li>Roofing & Reroofing</li>
              <li>Asphalt Roofing</li>
              <li>Cedar Shingle Roofing</li>
              <li>Metal Roofing</li>
              <li>Metal Roof Coatings</li>
              <li>Rubber Roofing</li>
              <li>Snow Removal</li>
              <li>Vinyl Siding</li>
              <li>Clapboard Siding</li>
              <li>Hardi Plank</li>
              <li>Cedar Impression Siding</li>
              <li>Framing</li>
              <li>Seamless Gutters</li>
              <li>Vinyl Replacement Windows</li>
              <li>Maintenance & Repair</li>
              <li>Consultation</li>
              <li>Management & Planning</li>
              <li>Design / Build</li>
            </ul>
            <p>
              Please <NuxtLink to="/contact">contact us</NuxtLink> with details
              of your project and we will help you obtain a quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

section {
  @include inner-section();
  padding: 6rem 2rem;
  height: auto;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.wwa {
  background: var(--dark-gray);
  h3,
  p {
    color: var(--light-text);
  }
}

.wwd {
  background: #ececec;
}

.separator {
  position: absolute;
  top: 0;
}

.two-column {
  @include two-column();
}

@media screen and (max-width: $breakpoint-lg) {
  .two-column {
    @include two-column-mobile();
  }
}
</style>
