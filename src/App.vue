<template>
  <div id="app">
    <div id="view" :class="[{ collapsed: collapsed }]">
      <router-view />
    </div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :collapsed="collapsed"
      hideToggle
      @item-click="onItemClick"
      @collapse="onCollapse"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "S-Partner",
        },
        {
          href: "/cursos",
          title: "Cursos",
          icon: "fa fa-list-ul",
          child: [
            {
              href: "/cursos/curso-1",
              title: "Curso 1",
              icon: "fa fa-file-alt",
              child: [
                {
                  href: "/cursos/curso-1/contents/1",
                  title: "Vídeo 1",
                  icon: "fa fa-file",
                },
                {
                  href: "/cursos/curso-1/contents/2",
                  title: "Texto 1",
                  icon: "fa fa-file",
                },
              ],
            },
            {
              href: "/cursos/curso-2",
              title: "Curso 2",
              icon: "fa fa-file-alt",
              child: [
                {
                  href: "/cursos/curso-2/contents/1",
                  title: "Vídeo 1",
                  icon: "fa fa-file",
                },
                {
                  href: "/cursos/curso-2/contents/2",
                  title: "Problema 3",
                  icon: "fa fa-file",
                },
              ],
            },
          ],
        },
      ],
      collapsed: true,
    };
  }
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome";
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome";
}
</style>
