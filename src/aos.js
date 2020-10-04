import Vue from "vue";

const aosOptions = {
  threshold: 0,
  once: true,
  timingFunction: "ease",
  duration: "1s",
  delay: 0,
};

const aos = (
  el,
  before = "is-hidden",
  after = "is-visible",
  options = aosOptions
) => {
  const ioptions = {
    ...aosOptions,
    ...options,
  };

  el.style.transitionProperty = ioptions.properties;
  el.style.transitionDuration = ioptions.duration;
  el.style.transitionTimingFunction = ioptions.timingFunction;
  el.classList.add(before);
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (ioptions.once) {
          if (isIntersecting) {
            setTimeout(() => {
              el.classList.add(after);
              el.classList.remove(before);
            }, ioptions.delay);
          }
        } else {
          if (isIntersecting) {
            setTimeout(() => {
              el.classList.add(after);
              el.classList.remove(before);
            }, ioptions.delay);
          } else {
            setTimeout(() => {
              el.classList.add(before);
              el.classList.remove(after);
            }, ioptions.delay);
          }
        }
      });
    },
    { threshold: ioptions.threshold }
  );
  observer.observe(el);
};

/**
 * Animate-on-scroll directive: Animate any element by adding v-aos directive
 * and configure it accordingly:
 * :v-aos="{
 *   once?: Boolean // trigger animation only once,
 *   timingFunction?: String // CSS timing functions, i.e. ease, linear etc.
 *   duration?: String // animation duration
 *   properties?: String // comma-separated list of properties that should be animated
 *   threshold?: Number // Trigger after how much of the element is being scolled over
 *   classBefore: String // CSS class that the element has before the animation
 *   classAfter: String // CSS class that the element has after the animation
 * }"
 */
Vue.directive("aos", {
  bind(el, binding) {
    aos(el, binding.value.classBefore, binding.value.classAfter, {
      once: binding.value.once,
      timingFunction: binding.value.timingFunction,
      properties: Array.isArray(binding.value)
        ? binding.value.properties.join(", ")
        : binding.value.properties,
      duration: binding.value.duration,
      delay: binding.value ? binding.value.delay * 1000 : 0,
    });
  },
});

/**
 * Shorthand directive for fading in element on scroll with 1s duration exactly once
 */
Vue.directive("aos-fade-once", {
  bind(el, binding) {
    aos(el, "fade-is-hidden", "fade-is-visible", {
      once: true,
      properties: "all",
      delay: binding.value ? binding.value.delay * 1000 : 0,
      duration: "0.5s",
    });
  },
});

/**
 * Shorthand directive for fading in element on scroll with 1s duration
 */
Vue.directive("aos-fade", {
  bind(el, binding) {
    aos(el, "fade-is-hidden", "fade-is-visible", {
      once: binding.value.once || false,
      properties: "all",
      delay: binding.value ? binding.value.delay * 1000 : 0,
    });
  },
});
