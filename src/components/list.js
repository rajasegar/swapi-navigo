const ListComponent = (items, entity) => {
  return `<ul class="my-2 min-h-[440px]">
${items.map((p,idx) => `<li><a class="block border w-full p-2  bg-gray-50 hover:bg-gray-100 hover:text-indigo-500" href='/${entity}/${idx+1}' data-navigo>${p.name}</a></li>`).join('')}
</ul>`
}

export default ListComponent;
