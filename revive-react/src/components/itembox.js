import React from 'react';

export const Svg1 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    )
}

export const Svg2 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
    )
}

export const ItemBox = (props) => {
    return (
    <div class="flex font-sans bg-stone-200 m-3 rounded-xl shadow-md">
        <div class="shrink-0 w-40 relative items-center">
          <img src= {props.coat} alt="" class="absolute inset-x-2 w-full h-full object-contain"/>
        </div>
        <form class="flex-auto pl-7 pr-4 pt-3 pb-3">
            <h1 class="flex-auto text-m font-semibold text-slate-900">
                {props.name}
            </h1>
            <div class="flex flex-wrap">
                <div class="text-m font-semibold text-stone-500 mr-1">
                ${props.price}
                </div>
                {/* <div class="text-lg font-semibold text-stone-500 line-through">
                {props.ogprice}
                </div> */}
            </div>
            <h2 class="flex-1 text-sm pt-1 font-semibold text-stone-500">
              {props.platform}
            </h2>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-stone-400">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-white peer-checked:text-black">
                  {props.size}
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-0 text-m font-medium">
            <div class="flex-auto flex space-x-4">
              <button onClick = {props.handleView} class="h-10 px-6 font-semibold rounded-md bg-cyan-500 hover:bg-cyan-600 text-white" type="submit">
                View
              </button>
            </div>
            <button onClick= {props.changeHeart} class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-cyan-700 border" type="button" aria-label="Like">
                {props.heart}
            </button>
          </div>
        </form>
    </div>
    )
}