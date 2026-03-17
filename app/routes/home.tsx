import type { Route } from "./+types/home";
import * as React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MetaMask — Unlock" },
    { name: "description", content: "Unlock MetaMask" },
  ];
}

export default function Home() {
  const [password, setPassword] = React.useState("");

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-700">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 15%, rgba(129, 78, 255, 0.25), transparent 60%), radial-gradient(900px 700px at 50% 110%, rgba(255, 126, 41, 0.20), transparent 65%)",
        }}
      />

      <section className="w-full max-w-[420px]">
        <div className="rounded-[16px] bg-black/75 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.65)] overflow-hidden h-[min(760px,calc(100vh-48px))] flex flex-col">
          <div className="px-6 pt-40 pb-10 flex-1 flex flex-col justify-center">
            <header className="flex justify-center">
              <svg
                viewBox="0 0 696 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[170px] select-none"
                aria-label="MetaMask"
              >
                <path
                  d="M394.102 265.407V340.812H355.162V288.57L310.786 293.73C301.039 294.854 296.75 298.041 296.75 303.912C296.75 312.512 304.892 316.136 322.344 316.136C332.985 316.136 344.773 314.553 355.184 311.824L335.026 340.353C326.885 342.165 318.95 343.06 310.579 343.06C275.262 343.06 255.103 329.024 255.103 304.119C255.103 282.149 270.95 270.613 306.956 266.531L354.519 261.004C351.951 247.175 341.516 241.167 320.762 241.167C301.291 241.167 279.78 246.143 260.539 255.431L266.662 221.696C284.55 214.22 304.938 210.367 325.532 210.367C370.825 210.367 394.148 229.173 394.148 265.384L394.102 265.407ZM43.7957 170.991L1.23138 340.812H43.7957L64.9173 255.477L101.542 299.372H145.918L182.542 255.477L203.664 340.812H246.228L203.664 170.968L123.718 265.912L43.7727 170.968L43.7957 170.991ZM203.664 1.14648L123.718 96.0905L43.7957 1.14648L1.23138 170.991H43.7957L64.9173 85.6558L101.542 129.55H145.918L182.542 85.6558L203.664 170.991H246.228L203.664 1.14648ZM496.454 263.825L462.031 258.848C453.431 257.495 450.037 254.766 450.037 250.019C450.037 242.313 458.407 238.919 475.63 238.919C495.559 238.919 513.447 243.001 532.253 251.831L527.506 218.554C512.324 213.119 494.894 210.413 476.777 210.413C434.442 210.413 411.325 225.136 411.325 251.624C411.325 272.241 424.007 283.777 450.954 287.859L485.836 293.065C494.665 294.418 498.289 297.812 498.289 303.247C498.289 310.953 490.147 314.576 473.612 314.576C451.871 314.576 428.319 309.37 409.078 300.082L412.931 333.359C429.466 339.482 450.977 343.105 471.135 343.105C514.617 343.105 537.252 327.924 537.252 300.977C537.252 279.465 524.57 267.907 496.5 263.848L496.454 263.825ZM552.388 186.15V340.812H591.329V186.15H552.388ZM636.829 271.301L690.974 212.638H642.516L591.329 273.319L645.91 340.789H695.057L636.829 271.278V271.301ZM546.953 134.297C546.953 159.203 567.111 173.238 602.429 173.238C610.799 173.238 618.734 172.321 626.876 170.532L647.034 142.003C636.622 144.709 624.835 146.314 614.194 146.314C596.764 146.314 588.6 142.691 588.6 134.091C588.6 128.197 592.911 125.032 602.635 123.909L647.011 118.749V170.991H685.952V95.586C685.952 59.3513 662.629 40.5689 617.335 40.5689C596.718 40.5689 576.354 44.4217 558.466 51.8979L552.342 85.6329C571.583 76.3449 593.095 71.3684 612.565 71.3684C633.32 71.3684 643.755 77.3769 646.323 91.2057L598.759 96.7326C562.754 100.815 546.907 112.35 546.907 134.32L546.953 134.297ZM438.043 126.156C438.043 157.414 456.16 173.261 491.936 173.261C506.201 173.261 517.988 170.991 529.294 165.785L534.271 131.591C523.4 138.15 512.301 141.544 501.201 141.544C484.437 141.544 476.961 134.756 476.961 119.574V74.2809H536.06V42.8163H476.961V16.099L402.909 55.2691V74.2809H437.997V126.133L438.043 126.156ZM399.767 111.892V119.597H294.526C299.273 135.284 313.377 142.462 338.42 142.462C358.349 142.462 376.925 138.38 393.437 130.468L388.69 163.537C373.508 169.867 354.267 173.284 334.567 173.284C282.257 173.284 253.727 150.19 253.727 107.397C253.727 64.603 282.715 40.5918 327.55 40.5918C372.384 40.5918 399.79 66.6441 399.79 111.914L399.767 111.892ZM294.021 93.3155H360.574C357.065 78.2942 345.53 70.451 327.091 70.451C308.653 70.451 297.714 78.0878 294.021 93.3155Z"
                  fill="white"
                />
              </svg>
            </header>

            <form
              className="mt-[72px]"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="block">
                <span className="sr-only">MetaMask password</span>
                <input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter MetaMask password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 rounded-[9px] bg-transparent  border border-white/30 px-5 text-[15px] text-gray-50 placeholder:text-[#a2a1a1] placeholder:font-medium outline-none transition-colors focus:border-white focus:ring-0"
                />
              </label>

              <button
                type="submit"
                disabled={password.length === 0}
                className="mt-5 w-full h-12 rounded-[12px] font-semibold text-[16px] tracking-wide transition-all duration-200 disabled:bg-[#848484] disabled:text-[#161616] disabled:cursor-not-allowed bg-white text-[#24272a] hover:bg-white/90 active:bg-white/80"
              >
                Unlock
              </button>

              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="text-[16px] font-bold text-[#758cff] hover:text-[#8FA4FF] hover:underline hover:decoration-[0.5px] underline-offset-4 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </form>
          </div>

          <div className="fox-hover relative h-[140px] overflow-hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 142 137"
              aria-hidden="true"
              className="select-none absolute left-1/2 -translate-x-1/2 top-[16px] w-[420px] max-w-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
            >
              <style>{`
                @keyframes ear-twitch-left {
                  0%   { transform: rotate(0deg); }
                  15%  { transform: rotate(-8deg); }
                  30%  { transform: rotate(3deg); }
                  45%  { transform: rotate(-5deg); }
                  60%  { transform: rotate(2deg); }
                  75%  { transform: rotate(-3deg); }
                  100% { transform: rotate(0deg); }
                }
                @keyframes ear-twitch-right {
                  0%   { transform: rotate(0deg); }
                  15%  { transform: rotate(8deg); }
                  30%  { transform: rotate(-3deg); }
                  45%  { transform: rotate(5deg); }
                  60%  { transform: rotate(-2deg); }
                  75%  { transform: rotate(3deg); }
                  100% { transform: rotate(0deg); }
                }
                .left-ear  { transform-origin: 40px 35px; transition: transform 0.3s ease-out; }
                .right-ear { transform-origin: 102px 35px; transition: transform 0.3s ease-out; }
                .fox-hover:hover .left-ear  { animation: ear-twitch-left 0.8s ease-in-out; }
                .fox-hover:hover .right-ear { animation: ear-twitch-right 0.8s ease-in-out 0.05s; }
              `}</style>
              <path
                fill="#FF5C16"
                d="m132.24 131.751-30.481-9.076-22.986 13.741-16.038-.007-23-13.734-30.467 9.076L0 100.465l9.268-34.723L0 36.385 9.268 0l47.607 28.443h27.757L132.24 0l9.268 36.385-9.268 29.357 9.268 34.723-9.268 31.286Z"
              />
              <g className="left-ear">
                <path
                  fill="#FF5C16"
                  d="m9.274 0 47.608 28.463-1.893 19.534L9.274 0Z"
                />
                <path
                  fill="#661800"
                  d="M9.268 0 0 36.385l9.268 29.357h19.93l25.784-17.745L9.268 0Z"
                />
              </g>
              <g className="right-ear">
                <path
                  fill="#FF5C16"
                  d="M132.24 0 84.632 28.463l1.887 19.534L132.24 0Z"
                />
                <path
                  fill="#661800"
                  d="M132.24 0l9.268 36.385-9.268 29.357h-19.931L86.526 47.997 132.24 0Z"
                />
              </g>
              {/* face details */}
              <path
                fill="#FF5C16"
                d="m39.742 100.478 20.947 15.957-20.947 6.24v-22.197Zm19.273-26.381L54.989 48.01l-25.77 17.74-.014-.007v.013l.08 18.26 10.45-9.918h19.28Zm-30.467 100.478-20.948 15.957 20.948 6.24v-22.197Zm10.529-34.723h.007-.007v-.013l-.006.007-25.77-17.739L82.5 74.097h19.272l10.457 9.917.073-18.259Z"
              />
              <path
                fill="#E34807"
                d="m39.735 122.675-30.467 9.076L0 100.478h39.735v22.197ZM59.008 74.09l5.82 37.714-8.066-20.97-27.49-6.82 10.456-9.923h19.28Zm42.764 48.585 30.468 9.076 9.268-31.273h-39.736v22.197ZM82.5 74.09l-5.82 37.714 8.065-20.97 27.491-6.82-10.463-9.923H82.5Z"
              />
              <path
                fill="#FF8D5D"
                d="m0 100.465 9.268-34.723h19.93l.073 18.266 27.492 6.82 8.065 20.969-4.146 4.618-20.947-15.957H0v.007Zm141.508 0-9.268-34.723h-19.931l-.073 18.266-27.49 6.82-8.066 20.969 4.145 4.618 20.948-15.957h39.735v.007ZM84.632 28.443H56.875L54.99 47.977l9.839 63.8H76.68l9.845-63.8-1.893-19.534Z"
              />
              <path
                fill="#661800"
                d="m53.248 81.665h-9.029l-4.916 4.819 17.466 4.33-3.521-9.155v.006ZM88.273 81.665h9.042l4.916 4.825-17.486 4.338 3.528-9.17v.007Zm-9.507 42.305 2.06-7.542-4.146-4.618H64.82l-4.145 4.618 2.059 7.542"
              />
              <path
                fill="#C0C4CD"
                d="M78.766 123.969v12.453H62.735v-12.453h16.03Z"
              />
              <path
                fill="#E7EBF6"
                d="m39.742 122.662 23.006 13.754v-12.453l-2.06-7.541-20.946 6.24Zm62.031 0-23.007 13.754v-12.453l2.06-7.541 20.947 6.24Z"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
