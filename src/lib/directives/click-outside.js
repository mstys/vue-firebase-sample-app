// Author: Thorsten, via https://jsfiddle.net/Linusborg/Lx49LaL8/

export default {
  bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const componentName = vNode.context.name;
      let warn = `[Vue-click-outside:] provided expression '${
        binding.expression
      }' is not a function, but has to be`;

      if (componentName) {
        warn += `Found in component '${componentName}'`;
      }

      console.warn(warn); // eslint-disable-line
    }

    // Define Handler and cache it on the element
    const { bubble } = binding.modifiers;
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };

    el.__vueClickOutside__ = handler; // eslint-disable-line
    document.addEventListener('click', handler);
  },

  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__); // eslint-disable-line
    el.__vueClickOutside__ = null; // eslint-disable-line
  },
};
