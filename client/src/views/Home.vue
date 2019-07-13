<template>
  <div id="home">
    <Body>
      <banner />
    </Body>

    <about />

    <subscribe />

  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      About: () => import('@/components/home/About'),
      Body: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
