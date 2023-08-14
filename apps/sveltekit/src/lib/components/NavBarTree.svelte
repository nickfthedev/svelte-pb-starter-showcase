<script>
  export let MenuTree = [];
  export let isMobile = true;
  export let user = null;
</script>

{#if isMobile}
  {#each MenuTree as MenuItem}
    {#if MenuItem.authRequired === false || (MenuItem.authRequired === true && user !== null)}
      <li>
        <a href={MenuItem.href}>{MenuItem.name}</a>
      </li>
    {/if}
    {#if MenuItem.subMenu !== null}
      <ul class="p-2">
        <svelte:self MenuTree={MenuItem.subMenu} {user} />
      </ul>
    {/if}
  {/each}
{:else}
  {#each MenuTree as MenuItem}
    {#if MenuItem.subMenu === null && (MenuItem.authRequired === false || (MenuItem.authRequired === true && user !== null))}
      <li><a href={MenuItem.href}>{MenuItem.name}</a></li>
    {/if}
    {#if MenuItem.subMenu !== null && (MenuItem.authRequired === false || (MenuItem.authRequired === true && user !== null))}  
    <li tabindex="0" class="dropdown">
        <div class="dropdown">
          <label tabindex="0">{MenuItem.name}</label>
          <ul
            class="p-2 mt-40 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
          >
            <svelte:self MenuTree={MenuItem.subMenu} {user} />
          </ul>
        </div>
      </li>
    {/if}
  {/each}
{/if}
