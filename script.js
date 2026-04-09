// GSAP Image sequence
window.addEventListener("load", function () {
  const canvas = document.getElementById("hero-scroll");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;

  const imageUrls = [
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ce09a08d4cc88d1f4f_i_001.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ca401563ed0b5f494f_i_002.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c950f4e4e456a9e789_i_003.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cb29a4e1b30fefc303_i_004.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ca020681e7750ab37c_i_005.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ca760b7978e8354ee3_i_006.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cadc607495d4d09657_i_007.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ca31dfa0d30021cf86_i_008.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cb91cf4cfaa3b5fb73_i_009.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cc9a8a9af02ffcf37a_i_010.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c78483962839e3dd1c_i_011.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bb9394f0d2b9e2d850_i_012.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c426fd358d7111b124_i_013.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bb6af9013d6b69ddaa_i_014.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d0d67f9151bb675bbc_i_015.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d21a56b059fe128291_i_016.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d2ab3e97d118f9c2dd_i_017.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d3f489c56c61dc44d2_i_018.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d4c5c89e413b966bef_i_019.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d3b0c1da26ec2d429d_i_020.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d3d36d0b109b915494_i_021.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d33665bd523177458b_i_022.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d358d8ddf8f872d889_i_023.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d702e6eabae3612b4a_i_024.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d71f7a17663bbc8cf4_i_025.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d798e94a226e0f023e_i_026.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9dfacb1dddfeb96fb_i_027.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9d79d67bc61ac47d6_i_028.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9020681e7750ab694_i_029.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e07112a8fa15988974_i_030.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9d0dc205ef321ded7_i_031.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bdd3da6b8a04b76858_i_032.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9f48c6f63d25d9b92_i_033.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e0401563ed0b5f4dd2_i_034.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d9962e46d7a87a3081_i_035.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d98f445fa3b7d779b6_i_036.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d900afe819018c48e9_i_037.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e0d36d0b109b915e0b_i_038.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e032ec50dc8724c33f_i_039.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e065cdab5bdadc1682_i_040.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bfec9a6161343445c5_i_041.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e0adc1570581e48834_i_042.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e0d8e7f40ce916d266_i_043.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e4c9d98db750252fd0_i_044.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e644481ef8fe449949_i_045.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e6c464b0b194f4d798_i_046.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f4741034e49f30b230_i_047.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f68065d3545f3fb1a2_i_048.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f78229ede0f4aa803e_i_049.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f750f4e4e456a9f5d3_i_050.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f7e7bd018144bfc258_i_051.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c6287d5cabdfea9d8e_i_052.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f723fdf93e99d0e127_i_053.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f76af9013d6b69f0b5_i_054.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f73385695db368f344_i_055.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f70d56895fa6091479_i_056.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f7c7ef5b237af4635b_i_057.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f8d12d3bd45367f580_i_058.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f98d222e67598f5d20_i_059.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f8c68d8a4f171796c8_i_060.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e726513c71c191bb4b_i_061.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e626fd358d7111b867_i_062.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e811071891a5d0c1d6_i_063.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e88f793c42d585699e_i_064.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e997b6771556dbbd17_i_065.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e901c2929a3903b91b_i_066.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ea6f7f7323921ddfbf_i_067.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c1f02f06d86e291976_i_068.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05eaab3e97d118f9c7f0_i_069.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05be81245ff12808e4f5_i_070.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ea047e26245e2c0e6e_i_071.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ea65ce1417da9b1f68_i_072.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ec974051f498c33ee3_i_073.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ed8feae8930a513cda_i_074.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05edf192920f545c779a_i_075.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ed1468c7a2800d222f_i_076.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f863294c845e43efba_i_077.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f85200a1b7527bb34b_i_078.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f820fb5f5ae03c69e8_i_079.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060478468237a9948337_i_080.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ee26fd358d7111bbf7_i_081.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05efdf2a85d981192efd_i_082.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05be6af9013d6b69de31_i_083.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e1f8a65b8af7a4b1ac_i_084.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e197b6771556dbbb26_i_085.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bcfa61e6c02113ba5c_i_086.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e260c72dedf3dac142_i_087.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c609a08d4cc88d1d86_i_088.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bc6d96d33ac82973fc_i_089.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bbab68472c5219e107_i_090.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dc07bd571647203f10_i_091.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c625957067b796dc5d_i_092.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dd00afe819018c4998_i_093.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d47a285ad4b1dc8408_i_094.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d4fa61e6c02113c1d6_i_095.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d44accdb3ec622b20a_i_096.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d7ba7f6e3013e58915_i_097.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d7470b8530f7c3f549_i_098.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d7e7bd018144bfb3de_i_099.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ce32a45d82bed333d0_i_100.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ce725921ddc3482f62_i_101.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d0d36d0b109b914e40_i_102.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d08f445fa3b7d777e9_i_103.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c570544730d3807e9d_i_104.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c5d5dceeb011096333_i_105.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ba3ca343c963c172b9_i_106.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ba716926c1d768ceb8_i_107.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dc0db6cd79c6ddd13c_i_108.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d7181d3599f1c33fb3_i_109.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dc7b1d5ddb53f06a1d_i_110.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e23c5c95ec99bb6696_i_111.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e298e94a226e0f045d_i_112.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05df3c0aea63414b5295_i_113.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e2b5e6c711a464e401_i_114.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e238f439d48a6f1d23_i_115.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e21c9d1a35dbe82960_i_116.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e309a08d4cc88d2a15_i_117.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3231dda8e9dcb52fb_i_118.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3131ce0d2312a72dd_i_119.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3fa2f6b57df943685_i_120.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3ab3e97d118f9c635_i_121.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3c005bede1f3fafb7_i_122.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e3dc607495d4d09b00_i_123.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c158d8ddf8f872cf94_i_124.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c1592191d7e1c677cd_i_125.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ef58d8ddf8f872de7e_i_126.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05efacd6a49a4e97d338_i_127.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ef9bc959a2b64d3996_i_128.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05efa7c716c3327acc1d_i_129.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05efc410da91e0e1044b_i_130.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f0dfacb1dddfeb9bf9_i_131.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f1738411a7b9286c11_i_132.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f107df08739936cc8a_i_133.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e4e70bb1f4a223cea6_i_134.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c84178fe9b266eeb5a_i_135.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e41f7a17663bbc96fc_i_136.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05bd520d06bbe03643ff_i_137.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f08b47beedfef95d92_i_138.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e4741034e49f30ae53_i_139.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f1a8d48038b12135f5_i_140.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f01468c7a2800d22a9_i_141.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f198e94a226e0f06b8_i_142.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f0974051f498c346eb_i_143.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f3408e54c44f96156e_i_144.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fa156d8488097c3cd8_i_145.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c202aea6b3ab811ec7_i_146.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c2e4f6df227af6c3e4_i_147.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d500fc68bce62727a3_i_148.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fa44481ef8fe44a4d7_i_149.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f46af9013d6b69efe7_i_150.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05faf9a323e716c933c5_i_151.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fa97b028010b7856e8_i_152.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ddd5dceeb011096d48_i_153.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fbbf2f885605efa034_i_154.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fc6d96d33ac829940d_i_155.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fc0db6cd79c6dddb8d_i_156.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fc4a826cc559810475_i_157.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f8d1e7a2ccb1a9cb12_i_158.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fe07bd57164720449b_i_159.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fea49ed69de6dd57fd_i_160.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06037b1d5ddb53f0706a_i_161.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06036af9013d6b69f802_i_162.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06036f7f7323921ded58_i_163.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0602adc1570581e48f96_i_164.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0604d1e7a2ccb1a9ddf7_i_165.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c7930817272263cf18_i_166.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06049f1e439fc806ea38_i_167.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d539c43c8bcdb77cb8_i_168.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0604020681e7750abef1_i_169.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06044b55e57e8a060c66_i_170.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0604c0293ca13e5a5c28_i_171.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0604e4f6df227af6d9a5_i_172.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c765cdab5bdadc11cc_i_173.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fed0109255cb670fae_i_174.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c79ed9424533acbbf7_i_175.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fe0b929b0c05afc47d_i_176.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c7f8a65b8af7a4a342_i_177.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e2881ac3db37f3e131_i_178.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e277986e3a23a5f398_i_179.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fe60c72dedf3dac6d4_i_180.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ffc0293ca13e5a5b5d_i_181.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fa378287f9a850633f_i_182.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05faa8f88e75b026b531_i_183.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fb3347e4801cab7fad_i_184.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dd3f9c52a9c45657eb_i_185.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fbc0293ca13e5a5961_i_186.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d49fadf1041592a0ce_i_187.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c6c9d98db75025272a_i_188.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fbd36d0b109b916538_i_189.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fc97b028010b78577d_i_190.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fb655d4494d74063ec_i_191.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ef592191d7e1c68595_i_192.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f902e6eabae3613bdc_i_193.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f956e569ec6ab7c0c2_i_194.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f402aea6b3ab812b66_i_195.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f37569bbcfe8752240_i_196.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05e400fc68bce6272a27_i_197.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dc8d222e67598f4936_i_198.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d74ce7626e803ffc35_i_199.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cf01c2929a3903b4bc_i_200.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cb9a60dca550cc31ee_i_201.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ba885933f0bf14baac_i_202.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05b8470b8530f7c3ea46_i_203.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05b8f48a1a5f3b517a66_i_204.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c26cb95e72fa139991_i_205.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060df02f06d86e2929d4_i_206.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cd58d8ddf8f872d122_i_207.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060cdb575b6b115d9a87_i_208.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060df489c56c61dc5b58_i_209.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060d862ec324eb54d91f_i_210.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060da8909b85f1f3436e_i_211.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060dd7f3b1eacd3086a4_i_212.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060e02e6eabae3613f6b_i_213.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060d2df04696c5bcd87f_i_214.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cd2a68495a12c060e7_i_215.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060d3a8650c68b9b69d9_i_216.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cd7af1e337634b6dc1_i_217.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060c9a60dca550cc516c_i_218.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cd09a08d4cc88d1e9e_i_219.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05cd520d06bbe03646ca_i_220.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060d3f9c52a9c45669c0_i_221.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0604974051f498c35295_i_222.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060451fea600da8ed302_i_223.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0606dafba5909d988135_i_224.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0606738411a7b92877dc_i_225.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c79922450049c39d11_i_226.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f5f48a1a5f3b518907_i_227.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06064ed2591a5d0ff4e9_i_228.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06068f445fa3b7d782d9_i_229.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06067569bbcfe8752f59_i_230.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06069b2a4f5fbcb0f1ab_i_231.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0606b6234b7f48fdcf85_i_232.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0606741034e49f30b716_i_233.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06084ce7626e80400953_i_234.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600f69243c2cd585f5e_i_235.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608f69243c2cd5860ca_i_236.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0602738411a7b92875c5_i_237.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608ace2674cdc218381_i_238.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608a8f88e75b026b764_i_239.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608f489c56c61dc59f2_i_240.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608bf2f885605efa32f_i_241.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0608c68d8a4f17179dbc_i_242.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06084accdb3ec622c436_i_243.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060af3d9295050cf3d4a_i_244.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060a8c39409946b93a7f_i_245.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c73f4d338359e3ccf4_i_246.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060a8d222e67598f6029_i_247.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c95d42521a86ecc7ec_i_248.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060a3e090c679128a9f0_i_249.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c9fa61e6c02113bd4e_i_250.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600047e26245e2c1254_i_251.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060a06a43f96a355fd3a_i_252.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600d36d0b109b916745_i_253.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600c410da91e0e10796_i_254.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060a98e94a226e0f0b12_i_255.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c9db468ff48cf61106_i_256.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060b3c0aea63414b5b07_i_257.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05c960042a7ac99a4f02_i_258.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d4415e839ee6ab7a59_i_259.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f5b16e8f6f76a1467a_i_260.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a06004ce7626e804008cc_i_261.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d10b929b0c05afba61_i_262.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060bb49c68984f3390fc_i_263.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060bb023af25ff747b47_i_264.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05dd28fed00689d5b466_i_265.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ff655d4494d740648f_i_266.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ffc005bede1f3fb897_i_267.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600143be0967e82faab_i_268.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05fe8cc405e919cde4f9_i_269.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a0600a49ed69de6dd583c_i_270.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ff52db253670433b95_i_271.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05d5e3bd33980bce3ca7_i_272.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060cec9a616134345723_i_273.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060b4a826cc559810ee1_i_274.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060c4ed2591a5d0ffe7f_i_275.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05ca3105d767cbdb6719_i_276.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060cd235fb104ab27960_i_277.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a05f54726ecbc1804e346_i_278.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060bc5c89e413b967e5a_i_279.avif",
    "https://cdn.prod.website-files.com/6924914f484f1fbde64221d6/698a060cb2e7b2c8970025af_i_280.avif",
  ];

  const frameCount = imageUrls.length;
  const images = [];
  const heroScroll = { frame: 0 };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = imageUrls[i];
    images.push(img);
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(heroScroll, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#video-trigger",
      scrub: 0.5,
      start: "top top",
      end: "bottom bottom",
    },
    onUpdate: render,
  });

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[heroScroll.frame], 0, 0);
  }
});


// Hero text on scroll
$("[tr-scroll-toggle='component']").each(function (index) {
  // get elements
  let component = $(this);
  let lists = component.find("[tr-scroll-toggle='list']");
  // set item total
  let itemTotal = lists.first().children().length;
  component.find("[tr-scroll-toggle='number-total']").text(itemTotal);
  // create trigger divs & spacer
  let firstTrigger = component.find("[tr-scroll-toggle='trigger']").first();
  for (let i = 1; i < itemTotal; i++) {
    firstTrigger.clone().appendTo(component);
  }
  let triggers = component.find("[tr-scroll-toggle='trigger']");
  firstTrigger.css("margin-top", "-100vh");
  let trSpacer = $("<div class='tr-scroll-toggle-spacer' style='width: 100%; height: 100vh;'></div>").hide().appendTo(component);
  // check for min width
  let minWidth = 0;
  let trMinWidth = component.attr("tr-min-width");
  if (trMinWidth !== undefined && trMinWidth !== false) {
    minWidth = +trMinWidth;
  }
  // main breakpoint
  gsap.matchMedia().add(`(min-width: ${minWidth}px)`, () => {
    // show spacer
    trSpacer.show();
    // switch which item is active
    function makeItemActive(activeIndex) {
      component.find("[tr-scroll-toggle='transform-y']").css("transform", `translateY(${activeIndex * -100}%)`);
      component.find("[tr-scroll-toggle='transform-x']").css("transform", `translateX(${activeIndex * -100}%)`);
      component.find("[tr-scroll-toggle='number-current']").text(activeIndex + 1);
      lists.each(function (index) {
        $(this).children().removeClass("is-active");
        $(this).children().eq(activeIndex).addClass("is-active");
      });
    }
    makeItemActive(0);
    // scroll to trigger div on click of anchor
    let anchorLinks = component.find("[tr-anchors]").children();
    anchorLinks.on("click", function () {
      let myIndex = $(this).index();
      let scrollDistance = triggers.eq(myIndex).offset().top + triggers.eq(myIndex).height() - 1;
      $("html, body").animate({ scrollTop: scrollDistance });
    });
    // triggers timeline
    triggers.each(function (index) {
      let triggerIndex = index;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top top",
          end: "bottom top",
          scrub: true,
          onToggle: ({ self, isActive }) => {
            if (isActive) {
              makeItemActive(triggerIndex);
            }
          }
        },
        defaults: {
          ease: "none"
        }
      });
      lists.each(function () {
        let childItem = $(this).children().eq(triggerIndex);
        tl.to(childItem.find("[tr-item-animation='scale-to-1']"), { scale: 1 }, 0);
        tl.from(childItem.find("[tr-item-animation='scale-from-1']"), { scale: 1 }, 0);
        tl.to(childItem.find("[tr-item-animation='progress-horizontal']"), { width: "100%" }, 0);
        tl.to(childItem.find("[tr-item-animation='progress-vertical']"), { height: "100%" }, 0);
        tl.to(childItem.find("[tr-item-animation='rotate-to-0']"), { rotation: 0 }, 0);
        tl.from(childItem.find("[tr-item-animation='rotate-from-0']"), { rotation: 0 }, 0);
      });
    });
    // component timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    });
    tl.to(component.find("[tr-section-animation='scale-to-1']"), { scale: 1 }, 0);
    tl.from(component.find("[tr-section-animation='scale-from-1']"), { scale: 1 }, 0);
    tl.to(component.find("[tr-section-animation='progress-horizontal']"), { width: "100%" }, 0);
    tl.to(component.find("[tr-section-animation='progress-vertical']"), { height: "100%" }, 0);
    tl.to(component.find("[tr-section-animation='rotate-to-0']"), { rotation: 0 }, 0);
    tl.from(component.find("[tr-section-animation='rotate-from-0']"), { rotation: 0 }, 0);
    // optional scroll snapping
    if (component.attr("tr-scroll-snap") === "true") {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: component,
          start: "top top",
          end: "bottom bottom",
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.01, max: 0.2 },
            delay: 0.0001,
            ease: "power1.out"
          }
        }
      });
      triggers.each(function (index) {
        tl2.to($(this), { scale: 1, duration: 1 });
        tl2.addLabel("trigger" + index);
      });
    }
    // smaller screen sizes
    return () => {
      trSpacer.hide();
      component.find("[tr-scroll-toggle='transform-y']").css("transform", "translateY(0%)");
      component.find("[tr-scroll-toggle='transform-x']").css("transform", "translateX(0%)");
      lists.each(function (index) {
        $(this).children().removeClass("is-active");
      });
    };
  });
});


// Swiper testimonios
var swiper = new Swiper(".testimonios-coleccion", {
  loop: true,
  slidesPerView: "auto",
  followFinger: true,
  freeMode: false,
  slideToClickedSlide: true,
  centeredSlides: true,
  autoHeight: false,
  speed: 550,
  mousewheel: {
    forceToAxis: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
