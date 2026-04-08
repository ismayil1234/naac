'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6e1515e7937b6d21346741b6fc54aa5d",
".git/config": "c1402a853e25694c317fc3c1a5b25f54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "96bc61a037922447328f1fda08831cbf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "43f3ea186f67e4b759ea5378e918decb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f9de66d563a89ea19c4465bfff455ab",
".git/logs/refs/heads/main": "0f9de66d563a89ea19c4465bfff455ab",
".git/logs/refs/remotes/origin/main": "40feae7c233d972222334d73782d52dd",
".git/objects/02/6088d9e7230bfe33bc4b86f55dfb3aec3dba0c": "cb9e05ea3c76fa2c8418789132991c31",
".git/objects/03/3120dde7a2f19d0fa28e1671727d7855296a32": "476291ed5c1c611008b549a2b43370e4",
".git/objects/06/8ca55c9af5d417cb8ea00875385beef5e5c7d2": "fb6744b68456517b1391814e02890511",
".git/objects/07/0b224f953931e70e6033653f015ed05fd4958c": "72e418d5ce4c19629691fe8fec03893a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/d75a682ca1a0cbd0676611f858a93960d441d2": "4431b7a157895771c0ee1b09a357ea23",
".git/objects/09/42f0d41f080bb779fcee8490d52851399a2313": "2251b5fa54cdffeaf6b44020a1991108",
".git/objects/09/ccb420d21e8d08c62a0a8e55e773f6ae40a61f": "5bc655f39ea4d0b87fd2523eebeea0fc",
".git/objects/0d/9a5780296ad332c4e68d86a389f287a1433603": "0afb1b12116be125c62f5d770a6fc73f",
".git/objects/11/99168d76360c099da9352eaec4b7299c46adda": "728fb708e2a750ad8ad49019f33925ac",
".git/objects/12/6b5e35b0726971275e8a1bf49c9e6d28f3c14b": "9a33b45d3b02b630d28bd50ede2d6e0d",
".git/objects/14/cc6c811e0b09e398cd9ed9f0f0fd1d8f668a8d": "b317b0d6e739a2c7f785a3f9c9491529",
".git/objects/17/fa60e9d4e0cddd0de6dd78ed35208ba7364073": "e1b1dfa90075befc036a587f87de0517",
".git/objects/20/9206911ebb84b0bd31f153b4f192057043311e": "07663f47aa747ab94681087a10ce6694",
".git/objects/20/d7921fc07382ef89b873bb8abd542f4f9932ec": "8a19590ada1801bcc1d5c311023f54a0",
".git/objects/23/02510411dff5fbeae823e691cbc7fffc7a59d5": "9afec88b2f27a4f4d5aa19aad006b8cd",
".git/objects/2a/aea004fdc57946c92b905e6229c48be5a88457": "a449e2fb352b8e3ff98e492eae9e0af6",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2c/d23708f6905ee0459eab8e5fad97fd4a3ad5c6": "739c132ec893a21e19a51673ef1fe43d",
".git/objects/2d/cc1f5b621c4a64b1c5b4192b86dc55274310fa": "ec115dd643e16ab07026126758038359",
".git/objects/2e/29a185ac182f56f50c72865d7b1900c89a6dda": "5217d13bad540492ac7d6d8bf575ee7a",
".git/objects/2f/de3ab74ba4f10736ae1d9a39042af1111c42f5": "887e39c248df761398326c5ba08aab88",
".git/objects/32/d730314ff1e95710ee476465651c04fd655a4e": "31910c89bd2582f29f0cb040f9248568",
".git/objects/36/cec7b208825e360c274e33014e5907be392bc2": "9dc37caea33ff4c7c095b72aa2b37a57",
".git/objects/38/eb9f091bfc5d27e096fac1150f021fb584d853": "52826d211db554198ba4b59843c2d1f3",
".git/objects/3a/6f925e117c565e2f62f68f49598c8f1aaa7c93": "ad3fb511c3cce4d60da0c7fbcaa11f5e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/e2fb89ef4cbbcb8b674cb05b860b9af24414ac": "9d4e846753003d771cbb5b360f79d90e",
".git/objects/3b/abe10874d0d4d73066931fef31898ebef263ea": "1568c42ec628c791dc919a05b7e05817",
".git/objects/3c/23bcefbd16710192b76128705db94bc441edd6": "c23f2195bc6457b1851582f399081912",
".git/objects/3c/a27bf58bc24a4a435dad911765effa38404086": "b1efb6fca3c0995283248edf0df0701d",
".git/objects/42/7391c8fc02e4371d18a81c30f1ddb969f17091": "c6f106a91bad650ae6ae4b0a900fc76f",
".git/objects/43/600add19fc515af65fc5a520632525ddca29e5": "a33b0be83f09797227da239e7912bc4f",
".git/objects/47/f686cbe18d6aacbef4f44cc5bb62f91b3afce4": "c03d66a24b1b919e11aa1eb4082d73bc",
".git/objects/49/88df4fa10db2de3dcf9e42471741e1595c967d": "0014125510fa26f1e608657c6cc59640",
".git/objects/4d/339bc3dde30492b6943fdf46e4e614d40e10f1": "b2a5e08eb55acd249202e016d341f4bd",
".git/objects/4d/52ffa13b287e5926d4913cfd2299cbbaee491a": "0301a516f36081357feae5b52db8cfc7",
".git/objects/4e/fe235ed1695004b08a5b0891ab6f74687aa063": "aeab47673657a34658ff73d39dbe4015",
".git/objects/50/6d5e6d1493b1fcbf77b2272589b87f905c3c92": "884317b2ffcd114304fb29f39602a584",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/385ea8e9159be3613d64c7ae40b919846e8429": "227e5fbf25d27de1efb4f61d2ad986c9",
".git/objects/5a/fa176c96cfc5924d48d666966de5da0f0db7c0": "c7af259609cac6ff115763b0850457bf",
".git/objects/5c/e6d4e11a30367fc1287ababdb1ff1dea59f8fd": "dbb805973e2465de844ffe9fbe507ad7",
".git/objects/62/213c81f6b4c59253fa382acdcf9c1c4d6b6309": "7d0509cfdbab61e90c2344f3ae708a1f",
".git/objects/62/fce0f85a0db82a490a637b82e080f266bd40e9": "7f050197e41901f8a0281a7704cc5855",
".git/objects/64/4862586465a6b4e8fc598c99444214cb148581": "e40a02cbb7626e56fb844b40a658907f",
".git/objects/65/bb0a8743e91bd49dc2b85ee62ab355a2a57d42": "4d20ade22ebec73ae54d4d588d293f69",
".git/objects/67/9f27824826c67eb4f2842bfa6024557dcc3a51": "29383a8cfb9e0249b4ac1f8435fd8cbe",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/5edd6af2653adc39b1421a3904f6a235fdd87b": "ec80bf9036c8c51feb9d41c8e4da9d96",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6f/128d588b93e999023dff700c2ada05cb25410e": "672a7c512a42eb1b50565207597a584a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/68ab693a5c8b80c8cac7e9f808fa8af0c570c0": "2f5ae2c39c02b784c9ccc09a55632200",
".git/objects/74/7ebb0dfc4c0c915bf6da5f945b7ea85d5af685": "7a3948c8e9aa059f42138800655d4dd8",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/3a045d1b3fe758741f3008ae2bc8a24d656779": "b13a560870d02ee270432fbc1a174dd1",
".git/objects/78/3314639096619318e34a1153a5499f6e380a4e": "054d71c55acb3f33139a54af36fc2f8f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/a0d31e12411490a4a6a653dddb5886e59cabb5": "4659e6582dbdd5ed24b206902d21b603",
".git/objects/87/ff995df43f2b549838ec6d28f9e9d29533b2a6": "eee4c38eacfbd31ff3bfb89c760a2046",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b0f156327f67f860f8aa5e0d2e50649688c241": "8d7170f94ae2370cd119f9f0218ed78a",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/ea308d1971cc8a6dc584b7cde802738b6f60ee": "1dfcc928c72d0a3026d1c5062d177a28",
".git/objects/92/2ceab1db0ef8a8e5254c85bbe366c795b3d714": "f92dc61b6dfc448bb3c66c1a8d75fc89",
".git/objects/92/9e8f006419110666c174c4ce497a674c3510b9": "6e47d878c99e61e1fb2a3577102cefe9",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/77f5921e4751a1110004ae9c0886a665ee3f82": "625890047488bac6557b7d0b99ce1110",
".git/objects/95/b6be3f777469d87a9ec65ca486d69700d81d1b": "4c267d0b1d51311fd0cb79a4e2b4f1cc",
".git/objects/97/812afc9496746f272e560ad882a154b6d5d63d": "833a37abf04f6f2b247ecc888c860ca2",
".git/objects/99/96ce433b43faed70f6fbd220e71cbd81927b0f": "62764780146d2369e16b575ef43adc48",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/bb61e58200f2e50b05a5a50f352f4e7ca7b68c": "a6e8e509aa4b9b43a69c6ebef8ac098d",
".git/objects/a3/4c7305d1a4dbd8dd310b673a019f38c7f6c960": "867c20f3097c577cdf7892e75a84bba5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/b4e5780d036f140b2a9af0ed70c30a6057254d": "4f95f61436b9e90cbb7702a8f24c4386",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/6fe5c3558845a35c8308b9714f2b28f17bafc8": "aecb9c7c3bb2f913e5d8fe5e0afd3548",
".git/objects/af/e0cccf32a72c4284beb73821af815544b1de95": "2c7a42480d2409e47a692e1472ce3ace",
".git/objects/af/f30c0e68cee579d8457f5c2326f4b5dca8ef14": "e49f05068583b4c24f0ce681665dedb9",
".git/objects/b0/6f68c626c70f2eaba141fec9e6dd5df296bf6f": "6facdd7d33fb0156c1c21dfa881bad98",
".git/objects/b1/52ff27c04672afed4435b427accefc56694e4a": "15b2974938f8ea9268bf031858615911",
".git/objects/b6/0c0226a3926c748d0a26321606efabc83c68f0": "9b480e379299a24ce3508aea0be53e2f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/f62b5297c2a69ca14e50c412510661a881484c": "5b80696d25370e099f6929306ddc1311",
".git/objects/c0/7673bada9bda15a4e646f6f6865f4d41579df8": "d6f941ea257da65db76f093d3ebcf09e",
".git/objects/c0/e7f5d68becb0c0885baa88a2cddc7756fee781": "02f39ac0015c24973ad856bf3851ed63",
".git/objects/c5/f14b273af47b289cf3aa744db82335e27f3faf": "b6e7602d3e7a262385ec428e8c2ea545",
".git/objects/c6/bae89eb68b46d590007a80c496066fb078b109": "1cda7e0cf84a07ed33db97d57a090e61",
".git/objects/c7/f5e897f63e33b347266ff1efde658eb685993b": "71bdaae0006007c43744a75d6c830f15",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/dc219d076a9d4984944051cfc309060ffb285f": "8d71f48bf649651abedfffeadb8e2253",
".git/objects/cb/56445601f8fc42055f5e99feff0eab9207a703": "e68012af8babe44e29db301462312a7e",
".git/objects/cc/28088dd167aa3b400fef8815d49957f3257dc1": "4bf384dd724b6a9f8fea41e0c4e5bb48",
".git/objects/cd/bd9fae7dc5b989fc97204a5ec20b5e5a09bc14": "72da05d6bdd7e9e9ce1539f96a320837",
".git/objects/d2/470341695907e2971948c04cff35cd8bf301ac": "d1c0645f30db513c8bbf1b47ff8bc313",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7e7137d19f141cf1bcfbd7fde4bc41e326ba47": "877db9ffb0bb18c65e6d3751f4e8c565",
".git/objects/d6/8f36e803803eb1ec3ffbf6fb8ae48f4d81a73b": "98950186ffc1b810d10054bb27703066",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f2deb90d1c503975cefdf30e19623a05c5da3a": "aa692aad7f5a5976845f4cda46614ce3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/4d94458867801876af406ad9f6c7f4f6d542e0": "64f1520e373c54d19ca2fb529a40bf76",
".git/objects/de/2a2792f24bf8afd745a447e8052725a3117e8a": "eeed2ac0ea368139d4502a931ae244b5",
".git/objects/e0/69c854f84b9b6af294c6a1bd1abe0f4be49000": "dee5f6e4eb73cc42ebe508ff15c409e0",
".git/objects/e1/fe140bad319df630be96064221f1b7f7f63fb2": "06d2d74b9635b248a9ceaf8d288347d5",
".git/objects/e4/1d025e5616e287a9411411fdc6291a3004dad6": "158ef82db0a66f7bfd658b309096c3f9",
".git/objects/e6/582c4c6220e915e1c30068cc99b9576b8842e9": "d13928bf684fb303a762387be5532d07",
".git/objects/e7/56a53068d28281514b77e359d9c866527c2ecf": "814cbc3b2a913c526760d3e67230e97c",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c2716f2e2c404189fe8acb3ce08b850eb2203d": "c87bb44d9b3ccc042b5753af3815416f",
".git/objects/eb/3edcd2282edbc1fba4e07b75deb2e05dd3e21f": "179c840dbf4afbec0bb020ec5e7e8e6f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4354dfe88911dd153a160cb6b7051def33653d": "b334bf30a919012140b57bc824814c6d",
".git/objects/ec/e4a4f453c9cb9e2254e3f8f26e65fc0c2b9420": "849a139e1f2ba19f890b59d53aeaffcf",
".git/objects/ee/15cf995723809a4004535e783d3864949044b0": "dcd10350876547fa62b25d8626d7cede",
".git/objects/ef/5695a3c8f4b247f19abd3d303a1ade64d0b074": "a10f8acd0d8eeb6d394945d6086edbb4",
".git/objects/f0/24073b1a7fb7b03e7b6cd4b88ad0b087c11124": "edfcef9ecd3f66d41891548e2609c89d",
".git/objects/f1/876c98ea0d7bd40732437262d7ce504e56b13a": "2f3fbd3ffd3510f7d8a8f64f85ecf426",
".git/objects/f3/31b795d2801c13b71c957c33b742ef53359a5a": "8de5e7a3f075a9ff969cba0ba4438260",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/44fafcaf8a25a64b9164aaa17a7bc01d7fb2ec": "f76f67e4cc56d069736870d2a2a7694e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/c94095c36cb2d7c27e7d2b0096edd41bbb6005": "14eab05e2464513aca1cc351ede22729",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/225590a519ca274a0e24ce1cdcc077c4f8e453": "48795b0862d56948957cacb7dc29b66b",
".git/objects/f9/e05418a0f9c0bb9b52510755e4ce58bafcf39c": "1d1cb2ceb1496f10e68b0ab5448b481f",
".git/objects/fa/6478a9e5fb667a66d4e6e60b8bc0bdbc79c613": "5abf4dd908b72196badc68a5b50bcafa",
".git/objects/fc/40ee1780c18cb2c1fc5f38f8156aa274c845e5": "4aa1f20c2871bf69b45af7ad46929c7a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "63f8d3dc736089f1700188d7d3c18c17",
".git/refs/heads/main": "5d2ee5ebeec9c1de3fcfdfec45a02405",
".git/refs/remotes/origin/main": "5d2ee5ebeec9c1de3fcfdfec45a02405",
"404.html": "a45de41421d77038252a727e785c7721",
"assets/AssetManifest.bin": "e4d67c58f2a2fc77f980a51c97325a90",
"assets/AssetManifest.bin.json": "50927c0513924efe2819dde1db60487f",
"assets/assets/fonts/Chillax-Extralight.ttf": "90500598435ccc7c60333b1ec8af3dfd",
"assets/assets/fonts/Chillax-Light.ttf": "3cb6abd53a4c3621b8c87994a4f8e964",
"assets/assets/fonts/Chillax-Medium.ttf": "1f167904be440c14d0ab018a6867e6f9",
"assets/assets/fonts/Chillax-Regular.ttf": "684a2f057a879a58a35f587697f33eda",
"assets/assets/fonts/Chillax-Semibold.ttf": "61d5bc776ce8042f8ac6f4e6b591612e",
"assets/assets/fonts/Poppins-Extralight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Semibold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/doc_thumbnail.png": "45fd071cc1bebe71be74cdbb4700630b",
"assets/assets/images/file_thumbnail.png": "e12cf0d5656a80f8ca447392f4680b16",
"assets/assets/images/image_thumbnail.png": "0a67215b2e301b477656f17f8d809023",
"assets/assets/images/logo512-removebg.png": "ac4965c3b741aa0eec84baef22737804",
"assets/assets/images/logo512.png": "0c45a60e7ed6af1931aab282543e83ca",
"assets/assets/images/pdf_thumbnail.jpg": "feb82762036acad29c35612b49948b0b",
"assets/assets/images/ppt_thumbnail.png": "deee9a8f1a7bf13f5fb986e66a735a98",
"assets/assets/images/xlsx_thumbnail.png": "055b509f5d2da67c93320fe7deaca23a",
"assets/FontManifest.json": "6bfb20e996f9493c5bfdff89344c4bff",
"assets/fonts/MaterialIcons-Regular.otf": "a6d71cfcf86a7a48a4c7451eda8f5e2d",
"assets/NOTICES": "def24456d053b05ed33296b1e8b94665",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon_N.png": "e9038f329e67a5fe8e2d99ffd3501a11",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2c8eb8a43ee5fa2efe15d7789d40d081",
"icons/Icon-192-N.png": "e69960fb57846f2b4d76d6712bda0f89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512-N.png": "0c45a60e7ed6af1931aab282543e83ca",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192-N.png": "d56728714894dd92413f2c79872d8f3c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512-N.png": "4cd6ea903cd2b0a508cb01cee069f430",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6bf8a33c3ea7876f3211051923f6493",
"/": "d6bf8a33c3ea7876f3211051923f6493",
"main.dart.js": "91bf2640c2532403b7e9c8fc6636f1cb",
"manifest.json": "670188923377b02f87f8766d62efc7c7",
"version.json": "1483ee18c61f11c11e9423ddf2a2ae73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
