import './App.css';
import thredupcoat from './images/brown-coat-thredup.jpg';
import poshmarkcoat from './images/brown-coat-poshmark.jpg';

function App() {
  return (
    <div class="bg-slate-50">
      <div class="bg-sky-300 border-sky-300">
        <h1 class="text-4xl font-bold text-slate-50 text-center">Revive</h1>
      </div>
      <div class="flex font-sans bg-stone-200 m-4 rounded-xl shadow-md">
        <div class="flex-auto w-48 relative items-center">
          <img src={thredupcoat} alt="" class="absolute inset-x-2 w-full h-full object-contain"/>
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              J. Crew Trenchcoat
            </h1>
            <div class="text-lg font-semibold text-stone-500 mr-1">
              $30.79
            </div>
            <div class="text-lg font-semibold text-stone-500 line-through">
              $99.00
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-stone-400">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-white peer-checked:text-black">
                  L
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-2 text-m font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-sky-400 text-white" type="submit">
                View
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-sky-600 border" type="button" aria-label="Like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="flex font-sans bg-stone-200 m-4 rounded-xl shadow-md">
        <div class="flex-absolute w-48 relative">
          <img src={poshmarkcoat} alt="" class="absolute inset-x-2 w-full h-full object-contain"/>
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              Banana Republic Coat
            </h1>
            <div class="text-lg font-semibold text-stone-500 mr-1">
              $90.00
            </div>
            <div class="text-lg font-semibold text-stone-500 line-through">
              $99.00
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-stone-400">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-white peer-checked:text-black">
                  XLP
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-2 text-m font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-sky-400 text-white" type="submit">
                View
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-sky-600 border" type="button" aria-label="Like">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="bg-sky-300 border-sky-300 flex space-x-20 mb-6 text-sm font-medium">
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-50 ml-12" type="button" aria-label="Like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        </button>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-50" type="button" aria-label="Like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        </button>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-50" type="button" aria-label="Like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
