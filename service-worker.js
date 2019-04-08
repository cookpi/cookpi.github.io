/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "47f6c944d22ff1ed98d63450082877f9"
  },
  {
    "url": "assets/css/0.styles.d12c699e.css",
    "revision": "5d37ee093160e1f9f6f33155bfe5ee58"
  },
  {
    "url": "assets/img/commit-log.5335a149.png",
    "revision": "5335a149306cb4eff45296d7ca65ebb5"
  },
  {
    "url": "assets/img/google-trend-language.375226d0.png",
    "revision": "375226d03f5e4d810d0a2b7175a08705"
  },
  {
    "url": "assets/img/node-spring-django.9a63c19b.png",
    "revision": "9a63c19b853cbe212157af0a85e691ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/step10-01.b7818965.png",
    "revision": "b7818965c5660b810e9fa9fc9ee5da5f"
  },
  {
    "url": "assets/img/step10-02.1e0fee55.png",
    "revision": "1e0fee55e209cd4331107f4a80821dec"
  },
  {
    "url": "assets/img/step10-03.2828b446.png",
    "revision": "2828b446dc4d26e47fa346ab96f399b4"
  },
  {
    "url": "assets/img/step10-04.d21af381.png",
    "revision": "d21af381981ff1b6ee497a099f68a203"
  },
  {
    "url": "assets/img/step10-10.3a324729.png",
    "revision": "3a324729edc898ccba5318809ef20f15"
  },
  {
    "url": "assets/img/step10-11.b3eed512.png",
    "revision": "b3eed512d8735ba08fc6d63ed7ac1d91"
  },
  {
    "url": "assets/img/step10-12.08d575ad.png",
    "revision": "08d575ad6f1c3837c62c7e3a3c612326"
  },
  {
    "url": "assets/img/step10-13.39878bca.png",
    "revision": "39878bca88d54aeee303b63b4138c8af"
  },
  {
    "url": "assets/img/step10-14.049750cf.png",
    "revision": "049750cf7a7ca858bfa538984cae2954"
  },
  {
    "url": "assets/img/step10-endpoints-test.04b11b32.png",
    "revision": "04b11b3271efe0f2dfc372c9e47ddbe3"
  },
  {
    "url": "assets/img/step10-endpoints.084bdf7e.png",
    "revision": "084bdf7e96848ab98180df78c7da950b"
  },
  {
    "url": "assets/img/step10-formation.3008d2aa.png",
    "revision": "3008d2aa82c4aace815690021daaf959"
  },
  {
    "url": "assets/img/step10-gateway-01.5d8bb55f.png",
    "revision": "5d8bb55f94e69b2e4ec85f6de25417cd"
  },
  {
    "url": "assets/img/step10-gateway-02.77499373.png",
    "revision": "77499373999293a941ed005773862771"
  },
  {
    "url": "assets/img/step10-lambda-01.9a64f420.png",
    "revision": "9a64f420574f512adf373faece7225f5"
  },
  {
    "url": "assets/img/step10-lambda-02.68b2963a.png",
    "revision": "68b2963aebfd6f45d59f850681d6fb65"
  },
  {
    "url": "assets/img/step11-jwt.cad6a750.png",
    "revision": "cad6a75012f84953adc9dd1dbce97f90"
  },
  {
    "url": "assets/img/step11-test-01.a3ceb612.png",
    "revision": "a3ceb612d142654c91e71edad980e995"
  },
  {
    "url": "assets/img/step11-test-02.c04bfbe4.png",
    "revision": "c04bfbe4dea81e404c9a4634487aaa68"
  },
  {
    "url": "assets/img/step11-test-03.31df112b.png",
    "revision": "31df112ba44d999d34a7ef4e690bfb84"
  },
  {
    "url": "assets/img/step12-01.f926c6cf.png",
    "revision": "f926c6cf63c3ab9422db6486f2ac1d4e"
  },
  {
    "url": "assets/img/step12-02.dbaddcb8.png",
    "revision": "dbaddcb862c0c2e3cc57222caa352fa0"
  },
  {
    "url": "assets/img/step13-01.c6aeb230.png",
    "revision": "c6aeb230103c93bc42db06255132b993"
  },
  {
    "url": "assets/img/step13-02.9eb97120.png",
    "revision": "9eb97120073c4ca45097fa3786908c55"
  },
  {
    "url": "assets/img/step13-03.72fb2f35.png",
    "revision": "72fb2f3579a29c7bd5fdb25d87bd3664"
  },
  {
    "url": "assets/img/step13-04.def6b3c3.png",
    "revision": "def6b3c3586f18c43c293be48548c941"
  },
  {
    "url": "assets/img/step13-05.599b96f7.png",
    "revision": "599b96f7e8c10a7de12d260cc9417476"
  },
  {
    "url": "assets/img/step13-06.1cb3329b.png",
    "revision": "1cb3329b27e8fe77efaea67c2821ca5e"
  },
  {
    "url": "assets/img/step13-08.999df694.png",
    "revision": "999df6944151c18353c420fe8ec2775e"
  },
  {
    "url": "assets/img/step3-01.d3d40019.png",
    "revision": "d3d400199a5d359aec968ba3a741de55"
  },
  {
    "url": "assets/img/step4-delete-uid.6797ec40.png",
    "revision": "6797ec40e7fc4ff82054fda4473b0b9c"
  },
  {
    "url": "assets/img/step4-delete.c893b61b.png",
    "revision": "c893b61b2ae87b13462b3978bb56b6de"
  },
  {
    "url": "assets/img/step4-get-uid.2beb679c.png",
    "revision": "2beb679cacaa8b93ae7821df006c337c"
  },
  {
    "url": "assets/img/step4-get.f9cbb463.png",
    "revision": "f9cbb4636a9d8e2ceed643af2194de01"
  },
  {
    "url": "assets/img/step4-post-uid.ac4cec45.png",
    "revision": "ac4cec45bbc626d10b68921d66bde83a"
  },
  {
    "url": "assets/img/step4-post.6632cebb.png",
    "revision": "6632cebb6a09978d91d488bac4ccc985"
  },
  {
    "url": "assets/img/step4-put-uid.0a5e977b.png",
    "revision": "0a5e977bc0f58275f1be8e262f5310a0"
  },
  {
    "url": "assets/img/step4-put.39c5790e.png",
    "revision": "39c5790ec81352e7e0048fc57ffdd669"
  },
  {
    "url": "assets/img/step5-api-error.a332dd4d.png",
    "revision": "a332dd4d5b1f4fcb3c78a21ed359af25"
  },
  {
    "url": "assets/img/step5-error.7ded53b0.png",
    "revision": "7ded53b03de640b28ddb8591da19dba2"
  },
  {
    "url": "assets/img/step6-create-table.77b2de0f.png",
    "revision": "77b2de0fe173982d8dbd35e02a15fb53"
  },
  {
    "url": "assets/img/step6-create.8ff3b4e3.png",
    "revision": "8ff3b4e3a5ca4d868098f23adf617678"
  },
  {
    "url": "assets/img/step6-result.c4c5d995.png",
    "revision": "c4c5d995089d34826db6d8d7a2d23592"
  },
  {
    "url": "assets/img/step7-get-user-uid.7d3fcd46.png",
    "revision": "7d3fcd46a624ce515ed0079bf39e0737"
  },
  {
    "url": "assets/img/step7-get-user.45716b48.png",
    "revision": "45716b48a97e1ea0520d3661c30cbfb8"
  },
  {
    "url": "assets/img/step7-post-user.c3e84257.png",
    "revision": "c3e8425706e712d2d5b02c3de7c900ec"
  },
  {
    "url": "assets/img/step7-put-user.afdd6ce0.png",
    "revision": "afdd6ce0a88790e5238e4aa1807a2c8a"
  },
  {
    "url": "assets/img/step8-01.d24cbb11.png",
    "revision": "d24cbb116b47287d0f982d4efa90438f"
  },
  {
    "url": "assets/img/step8-02.f875df8c.png",
    "revision": "f875df8cc168080d1657788db2859785"
  },
  {
    "url": "assets/img/step8-03.c9023980.png",
    "revision": "c9023980fa7b8afed0181a00896125e9"
  },
  {
    "url": "assets/img/step8-extract.0f82bbbd.png",
    "revision": "0f82bbbd809e616ee5d889c80efdfcb0"
  },
  {
    "url": "assets/img/step8-get-users.ff58889c.png",
    "revision": "ff58889cca69a3bbfef9618ccdef2780"
  },
  {
    "url": "assets/img/step8-page.25ff2088.png",
    "revision": "25ff208848834e8594bb385306291d13"
  },
  {
    "url": "assets/img/step8-sort.e6b1632b.png",
    "revision": "e6b1632bf3658e104dbfbd92f79cbc39"
  },
  {
    "url": "assets/img/step8-status-open.54de1e79.png",
    "revision": "54de1e791f4892487c5ce312ba9f181e"
  },
  {
    "url": "assets/img/step8-user-in.1ab41801.png",
    "revision": "1ab41801e99ebe19ffe1e9dbd68a78e9"
  },
  {
    "url": "assets/img/step8-user-lt.ab72882e.png",
    "revision": "ab72882e4fef44bb660e2e5e6dfde59b"
  },
  {
    "url": "assets/img/step9-get-item-info.f9355ec9.png",
    "revision": "f9355ec9ca4ab19023020902e5a125d1"
  },
  {
    "url": "assets/img/step9-get-items.d2f2cd41.png",
    "revision": "d2f2cd4111238942ed97a1c2c9bac34f"
  },
  {
    "url": "assets/img/step9-post-item.14d60aea.png",
    "revision": "14d60aeafbba882f277efc7f0e473a3f"
  },
  {
    "url": "assets/img/vuepress_190228.41f1bc35.png",
    "revision": "41f1bc357c882056f459e97559d07593"
  },
  {
    "url": "assets/js/10.8c6206d8.js",
    "revision": "4bb5da078eb9717d54210f852a0ba689"
  },
  {
    "url": "assets/js/11.aa695e12.js",
    "revision": "29b2b04573b0dccad6b85864f27da694"
  },
  {
    "url": "assets/js/12.e541e2a4.js",
    "revision": "01295275aceb86534304e30a2c5c7b32"
  },
  {
    "url": "assets/js/13.9c1acf6e.js",
    "revision": "d9dd7597ecc9b17a7008d999301d3ec8"
  },
  {
    "url": "assets/js/14.3f66bced.js",
    "revision": "78d758e98e7f17128cd81168bfca296b"
  },
  {
    "url": "assets/js/15.725a10e7.js",
    "revision": "fc23a1c93dd969aaffd4a2d3aa7ab76d"
  },
  {
    "url": "assets/js/16.f6336825.js",
    "revision": "0fde5b7059ea745931ccf5cc67b98189"
  },
  {
    "url": "assets/js/17.2f5b8a47.js",
    "revision": "d3fc7c9ef468ec3b06025ab152c2a7b3"
  },
  {
    "url": "assets/js/18.dac61c6c.js",
    "revision": "022e8893b73266fdb4c5761232e9e77e"
  },
  {
    "url": "assets/js/19.563cbe5c.js",
    "revision": "a6d4b35d1034e73567913dce6e8cf89c"
  },
  {
    "url": "assets/js/2.e34b6f30.js",
    "revision": "fda775524856282c10e6a7f35e9b1c28"
  },
  {
    "url": "assets/js/20.e3ff4309.js",
    "revision": "8c13951b72e5983a6feb9f7cde8553e3"
  },
  {
    "url": "assets/js/21.6ba84245.js",
    "revision": "7d195167dae3288252326e2da3286897"
  },
  {
    "url": "assets/js/22.b287b7eb.js",
    "revision": "3a653ae18ed488dd450cc9514bf2dc5b"
  },
  {
    "url": "assets/js/23.17ecc02d.js",
    "revision": "b5d76f90d17a9b11d99f93a6277606d2"
  },
  {
    "url": "assets/js/24.7681d1f1.js",
    "revision": "980598b6d0bb8fab8fb03de564c95c76"
  },
  {
    "url": "assets/js/25.b1827863.js",
    "revision": "3fc5704a386130cc2440ca3a2bb1929b"
  },
  {
    "url": "assets/js/26.b9cc6cc5.js",
    "revision": "fb3f5fe0e0b96d3eb69ff362ce009b47"
  },
  {
    "url": "assets/js/27.5d6b0b05.js",
    "revision": "7ef00523bcc892dd20fdb9fc76dae056"
  },
  {
    "url": "assets/js/28.52fa5ebf.js",
    "revision": "677b8a2914d155ece6c595002b51cb13"
  },
  {
    "url": "assets/js/29.9793156c.js",
    "revision": "2f2285c0b62e6e7f300f552f1ff57506"
  },
  {
    "url": "assets/js/3.e459d297.js",
    "revision": "a91ca2cfd1b3787a2cc8c9d912c32ad4"
  },
  {
    "url": "assets/js/30.b19e4f16.js",
    "revision": "2d4f749282bbc0462606aecd11b041e8"
  },
  {
    "url": "assets/js/4.81b4116f.js",
    "revision": "bb267536ea6ae7f4509f21937dd1d093"
  },
  {
    "url": "assets/js/5.33054d91.js",
    "revision": "cfb51636f78c23b93c0a0dc8e5a7b43f"
  },
  {
    "url": "assets/js/6.ed5ccd4c.js",
    "revision": "0c1efdd6e40742ebc78168efe393667f"
  },
  {
    "url": "assets/js/7.db887615.js",
    "revision": "5f749548c91e5e2f08d65d5bb91bc3d3"
  },
  {
    "url": "assets/js/8.2685572d.js",
    "revision": "298a2c3183d9762e2018c61dfdc9d3ba"
  },
  {
    "url": "assets/js/9.093f07b6.js",
    "revision": "42c35d1b60ab7ba1366a4451485ff140"
  },
  {
    "url": "assets/js/app.bdc570e9.js",
    "revision": "524bb2efcffd5e004ef95d948d0310cc"
  },
  {
    "url": "cheat-sheet/git/index.html",
    "revision": "83e2907b2ad43499d1510a290164f893"
  },
  {
    "url": "cheat-sheet/index.html",
    "revision": "bbbc6c5687c4bebb5e2d777eeb04e6b5"
  },
  {
    "url": "cheat-sheet/yarn/index.html",
    "revision": "63151c48af60204309a96c34d5dd549e"
  },
  {
    "url": "cook-dev/architecture/index.html",
    "revision": "72ada8c89b33ccbe4fb7fcae4a3ad0bb"
  },
  {
    "url": "cook-dev/index.html",
    "revision": "f5dfed48b127faa77288cde5424b9645"
  },
  {
    "url": "cook-dev/overview/index.html",
    "revision": "37c91db98889113560a1b63fefa8d069"
  },
  {
    "url": "cook-dev/tech-stack/index.html",
    "revision": "baa8b465021b277beb1bfd1eb9eaaa43"
  },
  {
    "url": "frameworks/aws/index.html",
    "revision": "646027d62dd0c2f4ce36765589085b9d"
  },
  {
    "url": "frameworks/firebase/index.html",
    "revision": "48eb55bf6565ba5774612dd6c085791f"
  },
  {
    "url": "frameworks/gcp/index.html",
    "revision": "5ea7f75b0e7307bcc60b188961b3e4e5"
  },
  {
    "url": "frameworks/index.html",
    "revision": "88742037d4daee3a5634cde2c50a72a5"
  },
  {
    "url": "frameworks/serverless/index.html",
    "revision": "7661d79ef0c29829afce743fa8654073"
  },
  {
    "url": "frameworks/serverless/rest-api/index.html",
    "revision": "8bdf2d86c5643f1ca6e335d84c6eeb46"
  },
  {
    "url": "frameworks/serverless/tutorial-serverless-express-aurora/index.html",
    "revision": "694c7bd325f4ac02dc9b0d96b0de6b41"
  },
  {
    "url": "frameworks/unity/index.html",
    "revision": "096f94527c8758ff7976028cd8315a87"
  },
  {
    "url": "guide/conventional-commits/index.html",
    "revision": "0841b4565adf3b13087ecb2c17fbaff0"
  },
  {
    "url": "guide/conventions/index.html",
    "revision": "c236a1ddfca6dc437458f50f2b6ca412"
  },
  {
    "url": "guide/editorconfig/index.html",
    "revision": "808e49c65945212fb18900409972f0e4"
  },
  {
    "url": "guide/git/index.html",
    "revision": "27eff013803f668ce20644afbda634a2"
  },
  {
    "url": "guide/index.html",
    "revision": "5b92be83dcf84f4ba2457551eae17f49"
  },
  {
    "url": "guide/monorepo/index.html",
    "revision": "2d9c630f9e2ddf5b8fe34bf43bce3764"
  },
  {
    "url": "guide/typescript/index.html",
    "revision": "93422cf5ca768ec33e5d7ccd9b73e1dc"
  },
  {
    "url": "guide/unity/index.html",
    "revision": "3fe74d916b40cfb8ed7eb22e55d35847"
  },
  {
    "url": "guide/unity/rest-api.html",
    "revision": "73fba12455846e34a5e22021bf62d3db"
  },
  {
    "url": "guide/vscode/index.html",
    "revision": "f2b4ed9681dcabe6c673456bbb28a9b2"
  },
  {
    "url": "guide/vuepress/index.html",
    "revision": "6c224ed695c64522ff5b4c11e6b549a5"
  },
  {
    "url": "icon.png",
    "revision": "9b8a0244afaf6841df62ef6459d8f570"
  },
  {
    "url": "icons/icon-114x114.png",
    "revision": "fbcac7b84076a71ee502a75e96a940ab"
  },
  {
    "url": "icons/icon-120x120.png",
    "revision": "0ba138c646de3daa3e951570460e3751"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "94f6be4132f17dcb4a98af485ac0ca5f"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "f15e32bd63445fb89abb1a5a50cdffae"
  },
  {
    "url": "icons/icon-150x150.png",
    "revision": "368875ba621c8d1684f80b625627ec79"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3aa96454d7f3db8ea889679180fcfd2b"
  },
  {
    "url": "icons/icon-16x16.png",
    "revision": "5e771d23ef105705cbb37f1f10a8af6f"
  },
  {
    "url": "icons/icon-180x180.png",
    "revision": "1e11a09eebd030db0afdcd05fe1fc0a9"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "7c1a7f98441b4e766fdc3091caacf786"
  },
  {
    "url": "icons/icon-310x310.png",
    "revision": "36fa4e3daaa81007c9bd50fde335a2ee"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "825f5c6dc61cf2c685a81c473def52ee"
  },
  {
    "url": "icons/icon-36x36.png",
    "revision": "72093c1d2680db6bd62443362ed0d79e"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "eff4124d95c12eb30c7299e2907eecc2"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "09867770408e85cd49eabb61e71bd60a"
  },
  {
    "url": "icons/icon-57x57.png",
    "revision": "f2669c71b1860ca418b15556ed145ebe"
  },
  {
    "url": "icons/icon-60x60.png",
    "revision": "43d67ed69214c513b4fc054ffd1225aa"
  },
  {
    "url": "icons/icon-64x64.png",
    "revision": "9b8a0244afaf6841df62ef6459d8f570"
  },
  {
    "url": "icons/icon-70x70.png",
    "revision": "a19c20732d96d7946ac8e02d32f27a99"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d5504cfb4aa1f5b6a4f9534d83ddbd81"
  },
  {
    "url": "icons/icon-76x76.png",
    "revision": "bd9a9cd56a1cbf8892f74a73e6a772bd"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "1e9f455f9bb151a21d6dda8d64a03f20"
  },
  {
    "url": "index.html",
    "revision": "694ab84ea4382a8964dad84531d61582"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
