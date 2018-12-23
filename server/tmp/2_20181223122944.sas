data work.tar(compress=no); 
length  keyname $20  keyvalue $1000  ;
infile cards truncover;
input keyname keyvalue $char1000.;
call symput('s_batch_mode','W');
call symput('s_run_mode','B');
if keyname='user'     then call symput('s_batch_user', keyvalue);
if keyname='report'   then call symput('s_project'   , keyvalue);
if keyname='theme'    then call symput('s_theme'     , keyvalue);
if keyname='log'      then call symput('s_batch_job' , keyvalue);
if keyname='runenv'   then call symput('s_runenv'    , keyvalue);
cards4;
user admin
envname system-a
theme form 2
report 2
pelet folder+
openpg
p1 2018
p2 1
p3 1
p4 Group ABC,Group DEF,Group XYZ
pgm  /sigmo/env/sw_tarlogs/2_20181223122944.sas
log /sigmo/env/sw_tarlogs/2_20181223122944.log
runenv env100
;;;;
RUN;
PROC DISPLAY C=EIS.UTILF.PROJECT_BATCH.SCL BATCH;
RUN;
