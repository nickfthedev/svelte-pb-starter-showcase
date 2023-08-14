<script lang="ts">
  import { onMount } from "svelte";
  import { themeList, setTheme } from "../themes";
  let current_theme = "";

  // Move into separate function and call from layout.server.svelte?
  onMount(async () => {
    let theme;
    theme = window.localStorage.getItem("theme");
    if (theme == null || theme == "") {
      theme = ""; // Default theme
    }
    const promise = setTheme(theme).then((newTheme) => {
      if (newTheme != null) {
        current_theme = newTheme;
      }
    });
  });

  function set_theme(event: Event) {
    const select = event.target as HTMLSelectElement;
    const theme = select.value;
    if (themeList.includes(theme)) {
      const one_year = 60 * 60 * 24 * 365;
      window.localStorage.setItem("theme", theme);
      document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
      document.documentElement.setAttribute("data-theme", theme);
      current_theme = theme;
    }
  }
</script>

<div class="">
  <select
    bind:value={current_theme}
    data-choose-theme
    class="select select-sm  w-full max-w-3xl capitalize text-neutral-500"
    on:change={set_theme}
  >
    <option value="" disabled={current_theme !== ""}> Choose a theme </option>
    {#each themeList as theme}
      <option value={theme} class="capitalize">{theme}</option>
    {/each}
  </select>
</div>
