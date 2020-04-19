const placeholdersArray = [
  'CORE_044',
  'CORE_045',
  'CORE_046',
  'CORE_048',
  'CORE_049',
  'CORE_049a',
  'CORE_050',
  'CORE_074',
  'CORE_075',
  'CORE_076',
  'CORE_078',
  'CORE_079',
  'CORE_080',
  'CORE_083',
  'CORE_084',
  'CORE_085',
  'CORE_086',
  'CORE_088',
  'CORE_089',
  'CORE_090',
  'CORE_091',
  'GAME_007',
  'GAME_008',
  'GAME_009',
  'GAME_010',
  'PRIME_001',
  'PRIME_002',
  'PRIME_003',
  'PRIME_004',
  'PRIME_005',
  'PRIME_006',
  'PRIME_007',
  'PRIME_008',
  'PRIME_009',
  'PRIME_010',
  'PRIME_011',
  'PRIME_012',
  'PRIME_013',
  'PRIME_014',
  'PRIME_015',
  'PRIME_016',
  'PRIME_017',
  'PRIME_018',
  'PRIME_019',
  'PRIME_020',
  'PRIME_021',
  'PRIME_022',
  'PRIME_023',
  'PRIME_024',
  'PRIME_025',
  'PRIME_026',
  'PRIME_027',
  'PRIME_028',
  'PRIME_029',
  'PRIME_030',
  'PRIME_031',
  'PRIME_032',
  'PRIME_033',
  'PRIME_034',
  'PRIME_035',
  'PRIME_036',
  'PRIME_037',
  'PRIME_038',
  'PRIME_039',
  'PRIME_040',
  'PRIME_041',
  'PRIME_042',
  'PRIME_043',
  'PRIME_044',
  'PRIME_045',
  'PRIME_046',
  'PRIME_047',
  'PRIME_048',
  'PRIME_049',
  'PRIME_050',
  'PRIME_051',
  'PRIME_052',
  'PRIME_053',
  'PRIME_054',
  'PRIME_055',
  'PRIME_056',
  'PRIME_057',
  'PRIME_058',
  'PRIME_059',
  'PRIME_060',
  'PRIME_061',
  'PRIME_062',
  'PRIME_063',
  'PRIME_064',
  'PRIME_065',
  'PRIME_066',
  'PRIME_067',
  'PRIME_068',
  'PRIME_069',
  'PRIME_070',
  'PRIME_071',
  'PRIME_072',
  'PRIME_073',
  'PRIME_074',
  'PRIME_075',
  'PRIME_076',
  'PRIME_077',
  'PRIME_078',
  'PRIME_079',
  'PRIME_081',
  'PRIME_082',
  'PRIME_083',
  'PRIME_084',
  'PRIME_085',
  'PRIME_086',
  'PRIME_087',
  'PRIME_088',
  'PRIME_089',
  'PRIME_090',
  'PRIME_091',
  'PRIME_092',
  'PRIME_093',
  'PRIME_094',
  'PRIME_095',
  'PRIME_096',
  'PRIME_097',
  'PRIME_098',
  'PRIME_099',
  'PRIME_100',
  'PRIME_101',
  'PRIME_102',
  'PRIME_103',
  'PRIME_104',
  'PRIME_105',
  'PRIME_106',
  'PRIME_107',
  'PRIME_108',
  'PRIME_109',
  'PRIME_110',
  'PRIME_111',
  'PRIME_112',
  'PRIME_113',
  'PRIME_114',
  'PRIME_115',
  'PRIME_116',
  'PRIME_117',
  'PRIME_118',
  'PRIME_119',
  'PRIME_120',
  'PRIME_121',
  'PRIME_122',
  'PRIME_123',
  'PRIME_124',
  'PRIME_125',
  'PRIME_126',
  'PRIME_127',
  'PRIME_128',
  'PRIME_129',
  'PRIME_130',
  'PRIME_131',
  'PRIME_132',
  'PRIME_133',
  'PRIME_134',
  'PRIME_135',
  'PRIME_136',
  'PRIME_137',
  'PRIME_138',
  'PRIME_139',
  'PRIME_140',
  'PRIME_141',
  'PRIME_142',
  'PRIME_143',
  'PRIME_144',
  'PRIME_145',
  'PRIME_146',
  'PRIME_147',
  'PRIME_148',
  'PRIME_149',
  'PRIME_150',
  'PRIME_151',
  'PRIME_152',
  'PRIME_153',
  'PRIME_154',
  'PRIME_155',
  'PRIME_156',
  'PRIME_157',
  'PRIME_158',
  'PRIME_159',
  'PRIME_160',
  'PRIME_161',
  'PRIME_162',
  'PRIME_163',
  'PRIME_164',
  'PRIME_165',
  'PRIME_166',
  'PRIME_167',
  'PRIME_168',
  'PRIME_169',
  'PRIME_170',
  'PRIME_171',
  'PRIME_172',
  'PRIME_173',
  'PRIME_174',
  'PRIME_175',
  'PRIME_176',
  'PRIME_177',
  'PRIME_178',
  'PRIME_179',
  'PRIME_180',
  'PRIME_181',
  'PRIME_182',
  'PRIME_183',
  'PRIME_184',
  'PRIME_185',
  'PRIME_186',
  'PRIME_187',
  'PRIME_188',
  'PRIME_189',
  'PRIME_190',
  'PRIME_191',
  'PRIME_192',
  'PRIME_193',
  'PRIME_194',
  'PRIME_195',
  'PRIME_196',
  'PRIME_197',
  'PRIME_198',
  'PRIME_199',
  'PRIME_200',
  'PRIME_201',
  'PRIME_202',
  'PRIME_203',
  'PRIME_204',
  'PRIME_205',
  'PRIME_206',
  'PRIME_207',
  'PRIME_208',
  'PRIME_209',
  'PRIME_210',
  'PRIME_211',
  'PRIME_212',
  'PRIME_213',
  'PRIME_214',
  'PRIME_215',
  'PRIME_216',
  'PRIME_217',
  'PRIME_218',
  'PRIME_219',
  'PRIME_220',
  'PRIME_221',
  'PRIME_222',
  'PRIME_223',
  'PRIME_224',
  'PRIME_225',
  'PRIME_226',
  'PRIME_227',
  'PRIME_228',
  'PRIME_229',
  'PRIME_230',
  'PRIME_231',
  'PRIME_232',
  'PRIME_233',
  'PRIME_234',
  'PRIME_235',
  'PRIME_236',
  'PRIME_237',
  'PRIME_238',
  'PRIME_239',
  'PRIME_240',
  'PRIME_241',
  'PRIME_242',
  'PRIME_243',
  'PRIME_244'
];

export default placeholdersArray;
