CREATE TABLE dasar_hukum(
    dh_id           uuid DEFAULT gen_random_uuid() PRIMARY KEY
    ,provinsi_id    uuid NOT NULL
    ,file_id         uuid NOT NULL
    ,file_name       VARCHAR(80) NOT NULL
);
INSERT INTO dasar_hukum(provinsi_id,file_id,file_name) VALUES ('e112464c-ca4e-4f29-8987-1e338b7aad45','19723011-3a9d-4f2d-ab80-53bccf225389','UU%20Nomor%2011%20Tahun%202006.pdf');
INSERT INTO dasar_hukum(provinsi_id,file_id,file_name) VALUES ('e112464c-ca4e-4f29-8987-1e338b7aad45','e779fb88-5d85-4629-9c3a-aa5901b70ecc','UU%20Nomor%2044%20Tahun%201999.pdf');
INSERT INTO dasar_hukum(provinsi_id,file_id,file_name) VALUES ('e112464c-ca4e-4f29-8987-1e338b7aad45','73ed56b3-5b8e-4a00-80c8-6624fb35be56','UU%20Nomor%2024%20Tahun%201956.pdf');
-- batas ---

CREATE TABLE daerah_otonomi(
    id              bigint PRIMARY KEY
    ,name           VARCHAR(22) NOT NULL
    ,pulau          VARCHAR(83) NOT NULL
);
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('1','Sumatra','pulau/Sumatra.svg');
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('2','Jawa dan Nusa Tenggara','pulau/Jawa_Dan_Nusatenggara.svg');
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('3','Kalimantan','pulau/Kalimantan.svg');
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('4','Sulawesi','pulau/Sulawesi.svg');
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('5','Maluku','pulau/Maluku.svg');
INSERT INTO daerah_otonomi(id,name,pulau) VALUES ('6','Papua','pulau/Papua.svg');

-- batas ---

CREATE TABLE provinsi(
    id                        uuid DEFAULT gen_random_uuid() PRIMARY KEY
    ,nama_provinsi            VARCHAR(29) NOT NULL
    ,daerah_otonomi           INTEGER NOT NULL
    ,slug_provinsi            VARCHAR(29) NOT NULL
    ,kode_wilayah             INTEGER NOT NULL
    ,singkatan_umum           VARCHAR(11) NOT NULL
    ,singkatan_ISO            VARCHAR(5) NOT NULL
    ,wilayah_geografis        VARCHAR(13) NOT NULL
    ,ibu_kota                 VARCHAR(14) NOT NULL
    ,gubernur                 VARCHAR(24) NOT NULL
    ,logo_provinsi            VARCHAR(83) NOT NULL
    ,hari_jadi                VARCHAR(17) NOT NULL
    ,dasar_hukum_pembentukan0 VARCHAR(18)
    ,dasar_hukum_pembentukan1 VARCHAR(18)
    ,dasar_hukum_pembentukan2 VARCHAR(18)
    ,populasi                 VARCHAR(8) NOT NULL
    ,luas                     VARCHAR(8) NOT NULL
    ,kepadatan_penduduk       VARCHAR(6) NOT NULL
    ,IPM                      VARCHAR(4) NOT NULL
    ,APBD_pendapatan_daerah   VARCHAR(7) NOT NULL
    ,APBD_belanja_daerah      VARCHAR(7) NOT NULL
    ,PDRB_total               VARCHAR(9) NOT NULL
    ,PDRB_perkapita           VARCHAR(8) NOT NULL
    ,dasar_hukum_pembentukan  VARCHAR(18)
);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Aceh','1','aceh',11,'Aceh','ID-AC','Sumatra','Banda Aceh','Achmad Marzuki','svg/Coat_of_arms_of_Aceh.svg','Tidak ada','UU No. 24 Th. 1956','UU No. 44 Th. 1999','UU No. 11 Th. 2006','5325010','5683909','9369','7199','1335298','1617065','1849763','3468046',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sumatra Utara','1','sumatra_utara',12,'Sumut','ID-SU','Sumatra','Medan','Edy Rahmayadi','svg/Coat_of_arms_of_North_Sumatra.svg','15 April 1948',NULL,NULL,NULL,'15180796','7246061','2095','7177','1201163','1264963','85987095','5756979','UU No. 24 Th. 1956');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sumatra Barat','1','sumatra_barat',13,'Sumbar','ID-SB','Sumatra','Padang','Mahyeldi Ansharullah','svg/Coat_of_arms_of_West_Sumatra.svg','1 Oktober 1945',NULL,NULL,NULL,'5596336','421377','13281','7238','592428','620428','25274965','4529375','UU No. 17 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Riau','1','riau',14,'Riau','ID-RI','Sumatra','Pekanbaru','Syamsuar','svg/Coat_of_arms_of_Riau.svg','9 Agustus 1957',NULL,NULL,NULL,'6454751','899359','7177','7271','865685','865685','84321115','12985259','UU No. 19 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kepulauan Riau','1','kepulauan_riau',21,'Kepri','ID-KR','Sumatra','Tanjungpinang','Ansar Ahmad','svg/Coat_of_arms_of_Lampung.svg','24 September 2002',NULL,NULL,NULL,'2055278','827387','24841','7559','348032','387032','27563633','13012523','UU No. 25 Th. 2002');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Jambi','1','jambi',15,'Jambi','ID-JA','Sumatra','Jambi','Al Haris','svg/Coat_of_arms_of_Riau_Islands.svg','6 Januari 1957',NULL,NULL,NULL,'3557073','4900873','7258','7129','421531','479585','23372546','6519322','UU No. 18 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Bengkulu','1','bengkulu',17,'Bengkulu','ID-BE','Sumatra','Bengkulu','Rohidin Mersyah','svg/Coat_of_arms_of_Bengkulu.svg','18 November 1968',NULL,NULL,NULL,'2032767','2013021','10098','714','276008','283878','7957633','3914343','UU No. 9 Th. 1967');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sumatra Selatan','1','sumatra_selatan',16,'Sumsel','ID-SS','Sumatra','Palembang','Herman Deru','svg/Coat_of_arms_of_Jambi.svg','15 Mei 1946',NULL,NULL,NULL,'8490335','8676934','9785','7001','990257','976647','49156645','5748744','UU No. 25 Th. 1959');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kepulauan Bangka Belitung','1','kepulauan_bangka_belitung',19,'Babel','ID-BB','Sumatra','Pangkalpinang','Ridwan Djamaluddin','svg/Coat_of_arms_of_Bangka_Belitung_Islands.svg','21 November 2000',NULL,NULL,NULL,'1455485','1669054','872','7147','192754','207966','859427','5833882','UU No. 27 Th. 2000');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Lampung','1','lampung',18,'Lampung','ID-LA','Sumatra','Bandar Lampung','Arinal Djunaidi','svg/Coat_of_arms_of_South_Sumatra.svg','18 Maret 1964',NULL,NULL,NULL,'8853275','3357541','26368','6969','655809','70117','37190317','4095042','UU No. 14 Th. 1964');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Daerah Khusus Ibukota Jakarta','2','daerah_khusus_ibukota_jakarta',31,'DKI Jakarta','ID-JK','Jawa','Tidak ada','Heru Budi Hartono','svg/Coat_of_arms_of_Jakarta.svg','22 Juni 1527','UU No. 1 Th. 1956','UU No. 29 Th. 2007',NULL,'11246067','66123','170078','8077','7744871','7575723','291458108','27470959',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Banten','2','banten',36,'Banten','ID-BT','Jawa','Serang','Al Muktabar','svg/Coat_of_arms_of_East_Java.svg','4 Oktober 2000',NULL,NULL,NULL,'11788728','935252','126049','7245','1064588','1122318','66592192','5521065','UU No. 23 Th. 2000');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Jawa Barat','2','jawa_barat',32,'Jabar','ID-JB','Jawa','Bandung','Ridwan Kamil','svg/Coat_of_arms_of_Banten.svg','19 Agustus 1945',NULL,NULL,NULL,'47586943','3704004','128474','7209','3154087','315257','220982238','4529958','UU No. 11 Th. 1950');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Jawa Tengah','2','jawa_tengah',33,'Jateng','ID-JT','Jawa','Semarang','Ganjar Pranowo','svg/Coat_of_arms_of_West_Java.svg','15 Agustus 1950',NULL,NULL,NULL,'37227604','3433454','108426','7187','2430374','2458987','142079991','3866911','UU No. 10 Th. 1950');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Daerah Istimewa Yogyakarta','2','daerah_istimewa_yogyakarta',34,'DIY','ID-YO','Jawa','Yogyakarta','Hamengkubuwana X','svg/Coat_of_arms_of_Central_Java.svg','Tidak ada','UU No. 3 Th. 1950','UU No. 13 Th. 2012',NULL,'3675662','317387','11581','7997','536461','576135','14936917','4022983',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Jawa Timur','2','jawa_timur',35,'Jatim','ID-JI','Jawa','Surabaya','Khofifah Indar Parawansa','svg/Coat_of_arms_of_Yogyakarta.svg','12 Oktober 1945',NULL,NULL,NULL,'40994515','4803389','85345','7171','2764217','2945486','24544988','6004333','UU No. 2 Th. 1950');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Bali','2','bali',51,'Bali','ID-BA','Nusa Tenggara','Denpasar','I Wayan Koster','svg/Coat_of_arms_of_Bali.svg','14 Agustus 1958',NULL,NULL,NULL,'4273992','559021','76455','755','504466','610249','21980003','5038121','UU No. 64 Th. 1958');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Nusa Tenggara Barat','2','nusa_tenggara_barat',52,'NTB','ID-NB','Nusa Tenggara','Mataram','Zulkieflimansyah','svg/Coat_of_arms_of_West_Nusa_Tenggara.svg','17 Desember 1958',NULL,NULL,NULL,'5405385','1967704','27471','6825','539908','596158','14015332','2600248','UU No. 20 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Nusa Tenggara Timur','2','nusa_tenggara_timur',53,'NTT','ID-NT','Nusa Tenggara','Kupang','Viktor Laiskodat','svg/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png','20 Desember 1958',NULL,NULL,NULL,'5484580','4645238','11807','6519','506028','548676','11088575','2058113','UU No. 21 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kalimantan Barat','3','kalimantan_barat',61,'Kalbar','ID-KB','Kalimantan','Pontianak','Sutarmidji','svg/Coat_of_arms_of_West_Kalimantan.svg','28 Januari 1957',NULL,NULL,NULL,'5461993','1470352','3715','6766','539293','568442','23132116','422829','UU No. 9 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kalimantan Tengah','3','kalimantan_tengah',62,'Kalteng','ID-KT','Kalimantan','Palangka Raya','Sugianto Sabran','svg/Coat_of_arms_of_Central_Kalimantan.svg','23 Mei 1957',NULL,NULL,NULL,'2639990','15341306','1721','7105','516726','519168','17000121','6291285','UU No. 21 Th. 1958');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kalimantan Selatan','3','kalimantan_selatan',63,'Kalsel','ID-KS','Kalimantan','Banjarbaru','Sahbirin Noor','svg/Coat_of_arms_of_South_Kalimantan.svg','14 Agustus 1950',NULL,NULL,NULL,'4103719','371903','11034','7091','627884','624384','19257658','4671268','UU No. 8 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kalimantan Timur','3','kalimantan_timur',64,'Kaltim','ID-KI','Kalimantan','Samarinda','Isran Noor','svg/Coat_of_arms_of_East_Kalimantan.svg','9 Januari 1957',NULL,NULL,NULL,'3803972','12790784','2974','7624','108618','1150177','69515833','18254082','UU No. 10 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Kalimantan Utara','3','kalimantan_utara',65,'Kaltara','ID-KU','Kalimantan','Tanjung Selor','Zainal Arifin Paliwang','svg/Coat_of_arms_of_North_Kalimantan.svg','25 Oktober 2012',NULL,NULL,NULL,'692239','692121','10','7063','214631','240494','11066894','15508062','UU No. 20 Th. 2012');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sulawesi Utara','4','sulawesi_utara',71,'Sulut','ID-SA','Sulawesi','Manado','Olly Dondokambey','svg/Coat_of_arms_of_North_Sulawesi.svg','23 September 1964',NULL,NULL,NULL,'2655970','1451127','18303','7293','400012','381765','14260002','5404318','UU No. 5 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Gorontalo','4','gorontalo',75,'Gorontalo','ID-GO','Sulawesi','Gorontalo','Hamka Hendra Noer','svg/Coat_of_arms_of_South_Sulawesi.svg','5 Desember 2000',NULL,NULL,NULL,'1198765','1204591','9952','6868','175729','173947','4389637','3717045','UU No. 38 Th. 2000');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sulawesi Tengah','4','sulawesi_tengah',72,'Sulteng','ID-ST','Sulawesi','Palu','Rusdy Mastura','svg/Coat_of_arms_of_Gorontalo.svg','23 September 1964',NULL,NULL,NULL,'3034513','612375','4955','6955','867812','680872','24698736','8173304','UU No. 6 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sulawesi Barat','4','sulawesi_barat',76,'Sulbar','ID-SR','Sulawesi','Mamuju','Akmal Malik','svg/Coat_of_arms_of_Southeast_Sulawesi.svg','22 September 2004',NULL,NULL,NULL,'1441407','1658943','8689','6611','182708','201566','5034123','3503602','UU No. 26 Th. 2004');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sulawesi Selatan','4','sulawesi_selatan',73,'Sulsel','ID-SN','Sulawesi','Makassar','Andi Sudirman Sulaiman','svg/Coat_of_arms_of_Central_Sulawesi.svg','19 Oktober 1669',NULL,NULL,NULL,'9192621','4570416','20113','7193','922313','910928','54523003','5965624','UU No. 4 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Sulawesi Tenggara','4','sulawesi_tenggara',74,'Sultra','ID-SG','Sulawesi','Kendari','Ali Mazi','svg/Coat_of_arms_of_West_Sulawesi.svg','27 April 1964',NULL,NULL,NULL,'2669840','3615855','7384','7145','384047','476732','13905783','5229397','UU No. 7 Th. 2022');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Maluku Utara','5','maluku_utara',82,'Malut','ID-MU','Maluku','Sofifi','Abdul Ghani Kasuba','svg/Coat_of_arms_of_Maluku.svg','12 Oktober 1999',NULL,NULL,NULL,'1316973','3298931','3992','6849','284904','333596','5235985','4030232','UU No. 46 Th. 1999');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Maluku','5','maluku',81,'Maluku','ID-MA','Maluku','Ambon','Murad Ismail','svg/Coat_of_arms_of_North_Maluku.svg','19 Agustus 1945',NULL,NULL,NULL,'1875506','4615092','4064','6949','332815','401522','4856422','2607298','UU No. 20 Th. 1958');
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua Barat','6','papua_barat',92,'Pabar','ID-PB','Papua','Manokwari','Paulus Waterpauw','svg/Coat_of_arms_of_Papua_2.svg','12 Oktober 1999','UU No. 45 Th. 1999','UU No. 35 Th. 2008',NULL,'547516','6033814','1154','6509','631185','677826','8507286','73539',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua','6','papua',91,'Papua','ID-PA','Papua','Jayapura','Lukas Enembe','svg/Coat_of_arms_of_West_Papua.svg','27 Desember 1949','UU No. 12 Th. 1969','UU No. 21 Th. 2001',NULL,'4308744','31276713','1378','6044','1476375','1575896','23534325','543426',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua Selatan','6','papua_selatan',93,'Pasel','—','Papua','Merauke','Apolo Safanpo','svg/Indonesia_Flag.svg','Tidak ada','UU No. 14 Th. 2022','UU No. 2 Th. 2021',NULL,'—','—','—','—','—','—','—','—',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua Tengah','6','papua_tengah',94,'Papteng','—','Papua','Nabire','Ribka Haluk','svg/Indonesia_Flag.svg','Tidak ada','UU No. 15 Th. 2022','UU No. 2 Th. 2021',NULL,'—','—','—','—','—','—','—','—',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua Pegunungan','6','papua_pegunungan',95,'Papeg','—','Papua','Wamena','Nikolaus Kondomo','svg/Indonesia_Flag.svg','Tidak ada','UU No. 16 Th. 2022','UU No. 2 Th. 2021',NULL,'—','—','—','—','—','—','—','—',NULL);
INSERT INTO provinsi(nama_provinsi,daerah_otonomi,slug_provinsi,kode_wilayah,singkatan_umum,singkatan_ISO,wilayah_geografis,ibu_kota,gubernur,logo_provinsi,hari_jadi,dasar_hukum_pembentukan0,dasar_hukum_pembentukan1,dasar_hukum_pembentukan2,populasi,luas,kepadatan_penduduk,IPM,APBD_pendapatan_daerah,APBD_belanja_daerah,PDRB_total,PDRB_perkapita,dasar_hukum_pembentukan) VALUES ('Papua Barat Daya','6','papua_barat_daya',96,'PBD','—','Papua','Sorong','—','svg/Indonesia_Flag.svg','Tidak ada','UU No. ... Th. ...','UU No. 2 Th. 2021',NULL,'601022','3916753','—','—','—','—','—','—',NULL);
