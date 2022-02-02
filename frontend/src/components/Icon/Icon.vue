<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >
      {{iconName}}
    </title>
    <g
      :fill="iconColor"
    >
      <slot/>
    </g>
  </svg>
</template>
<script>
export default {
    name: 'icon',
    props: {
        iconName: {
            type: String,
            default: 'box'
        },
        width: {
            type: [Number, String],
            default: 14
        },
        height: {
            type: [Number, String],
            default: 14
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        viewBox: {
            type: String,
            default: '0 0 14 14'
        }
    }
}
</script>
