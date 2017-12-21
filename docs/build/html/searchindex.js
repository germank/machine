Search.setIndex({docnames:["dataset","evaluator","index","loss","models","notes/intro","optim","trainer","util"],envversion:52,filenames:["dataset.rst","evaluator.rst","index.rst","loss.rst","models.rst","notes/intro.md","optim.rst","trainer.rst","util.rst"],objects:{"seq2seq.dataset":{fields:[0,0,0,"-"]},"seq2seq.dataset.fields":{SourceField:[0,1,1,""],TargetField:[0,1,1,""]},"seq2seq.dataset.fields.TargetField":{SYM_EOS:[0,2,1,""],SYM_SOS:[0,2,1,""],build_vocab:[0,3,1,""]},"seq2seq.evaluator":{evaluator:[1,0,0,"-"],predictor:[1,0,0,"-"]},"seq2seq.evaluator.evaluator":{Evaluator:[1,1,1,""]},"seq2seq.evaluator.evaluator.Evaluator":{evaluate:[1,3,1,""]},"seq2seq.evaluator.predictor":{Predictor:[1,1,1,""]},"seq2seq.evaluator.predictor.Predictor":{predict:[1,3,1,""]},"seq2seq.loss":{loss:[3,0,0,"-"]},"seq2seq.loss.loss":{Loss:[3,1,1,""],NLLLoss:[3,1,1,""],Perplexity:[3,1,1,""]},"seq2seq.loss.loss.Loss":{eval_batch:[3,3,1,""],get_loss:[3,3,1,""],reset:[3,3,1,""]},"seq2seq.models":{DecoderRNN:[4,0,0,"-"],EncoderRNN:[4,0,0,"-"],TopKDecoder:[4,0,0,"-"],attention:[4,0,0,"-"],baseRNN:[4,0,0,"-"],seq2seq:[4,0,0,"-"]},"seq2seq.models.DecoderRNN":{DecoderRNN:[4,1,1,""]},"seq2seq.models.EncoderRNN":{EncoderRNN:[4,1,1,""]},"seq2seq.models.EncoderRNN.EncoderRNN":{forward:[4,3,1,""]},"seq2seq.models.TopKDecoder":{TopKDecoder:[4,1,1,""]},"seq2seq.models.TopKDecoder.TopKDecoder":{forward:[4,3,1,""]},"seq2seq.models.attention":{Attention:[4,1,1,""]},"seq2seq.models.attention.Attention":{set_mask:[4,3,1,""]},"seq2seq.models.baseRNN":{BaseRNN:[4,1,1,""]},"seq2seq.models.seq2seq":{Seq2seq:[4,1,1,""]},"seq2seq.optim":{optim:[6,0,0,"-"]},"seq2seq.optim.optim":{Optimizer:[6,1,1,""]},"seq2seq.optim.optim.Optimizer":{set_scheduler:[6,3,1,""],step:[6,3,1,""],update:[6,3,1,""]},"seq2seq.trainer":{supervised_trainer:[7,0,0,"-"]},"seq2seq.trainer.supervised_trainer":{SupervisedTrainer:[7,1,1,""]},"seq2seq.trainer.supervised_trainer.SupervisedTrainer":{train:[7,3,1,""]},"seq2seq.util":{checkpoint:[8,0,0,"-"]},"seq2seq.util.checkpoint":{Checkpoint:[8,1,1,""]},"seq2seq.util.checkpoint.Checkpoint":{INPUT_VOCAB_FILE:[8,2,1,""],MODEL_NAME:[8,2,1,""],OUTPUT_VOCAB_FILE:[8,2,1,""],TRAINER_STATE_NAME:[8,2,1,""],load:[8,4,1,""],path:[8,2,1,""],save:[8,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:classmethod"},terms:{"class":[0,1,3,4,6,7,8],"default":[1,4,5,6,7,8],"float":[1,3,4,6,7],"function":[3,4,6],"import":5,"int":[1,3,4,6,7,8],"new":5,"return":[1,3,4,7,8],"true":[0,3,4,7],"try":5,"while":5,Adding:5,EOS:5,For:[0,3,5],IDs:4,The:[3,4,5,6,7,8],Used:4,_loss:3,about:[0,5],acc_loss:3,accumul:3,activ:5,adam:7,addit:4,after:[3,7],against:1,all:5,allow:[4,8],alpha:5,alreadi:5,altern:8,ani:5,append:0,appli:4,applic:5,appreci:5,arbitrari:4,architectur:[4,5],arg:[0,4,8],argument:4,attend:4,attent:5,attn:4,averag:3,base:[3,4,5],batch:[1,3,4,7],batch_first:0,batch_siz:[1,4,7],beam:4,becom:4,being:[5,8],below:5,benchmark:5,bidirect:4,bool:[3,4,7],bug:5,build_vocab:0,calcul:3,call:[3,8],caller:6,can:[3,8],caption:5,cell:4,checkout:5,checkpoint:7,checkpoint_everi:7,checkpoint_path:7,classmethod:8,clip:6,cluster:8,cnn:5,coco:5,collabor:5,com:0,command:5,commonli:3,complet:5,compon:5,conda:5,configur:4,constantli:5,contain:4,context:4,convers:5,convolut:5,copi:8,correspond:5,could:6,cpu:5,creat:5,criteria:6,criterion:3,ctrl:5,current:[5,6,7,8],data:[0,1,4,5,7,8],dataset:[1,2,7],decod:[4,5],decode_funct:4,decoder_hidden:4,decoder_output:4,decoder_rnn:4,defin:3,defulat:4,depend:[3,6],detail:[4,7],dev:[5,7],dev_data:7,dev_path:5,develop:6,dictionari:4,differ:8,dim:4,dimens:4,directli:[3,4],directori:[5,7,8],disabl:6,discuss:5,disk:8,doc:3,docstr:5,document:5,drawn:4,dropout:4,dropout_p:4,dure:8,each:[3,4],embedding_s:4,encapsul:[3,6],encod:[4,5],encoder_hidden:4,encoder_output:4,encodr:4,end:[0,4],enter:5,eos:0,eos_id:[0,4],epoch:[6,7,8],especi:5,etc:5,eval_batch:3,evalu:[2,3,5],everi:4,evolv:5,exampl:[4,5,8],expect:[3,4,5],experi:[5,7,8],experiment_dir:[5,8],exponenti:3,expt_dir:7,extens:5,facilit:5,fals:[4,7],fast:5,featur:[4,5],feedback:5,feel:5,field:[5,8],file:[5,8],fix:5,flag:4,flexibl:5,focu:5,folder:[5,7],follow:[4,5,8],forc:[0,4,7],format:8,forward:4,forward_rnn:4,framework:[4,5,7],free:5,frequent:5,from:[4,7,8],full:8,func:4,gener:[4,5],get:3,get_loss:3,github:[0,5],give:8,given:[1,3,4,6,7],goal:5,googl:5,gradient:6,gru:4,guid:5,had:5,has:5,have:5,help:7,here:5,hidden:4,hidden_s:4,how:3,html:3,http:[0,3],imag:5,implement:[3,5],improv:5,includ:[5,6],include_length:0,incom:4,index:[0,3,4],indic:4,individu:3,infer:5,inferenc:3,inform:[0,3,4],initi:[4,8],input:[1,4,5,8],input_dropout_p:4,input_len:4,input_length:4,input_s:4,input_var:4,input_vari:4,input_vocab:[4,5,8],input_vocab_fil:8,instanti:6,integ:4,interfac:3,introduct:2,issu:5,item:5,its:5,job:8,k80:5,kei:4,key_attn_scor:4,key_input:4,key_length:4,key_sequ:4,keyword:4,kind:5,kwarg:[0,4],languag:[1,3,8],last:4,later:8,latest:[5,7],layer:4,learn:[5,6],learning_r:7,least:5,length:4,less:5,librari:5,like:5,likelihood:3,linear:4,linear_out:4,list:[1,3,4],load:[0,5,7,8],local:8,log:3,log_softmax:4,logic:3,look:[4,5],loop:8,loss:[1,2,6,7],lr_schedul:6,lstm:4,machin:5,major:5,make:[1,7,8],manag:[0,8],mask:[3,4],master:3,max_grad_norm:[6,7],max_len:4,max_length:4,max_seq_length:4,maximum:4,mechan:4,messag:3,met:6,method:[3,8],mini:4,minut:5,model:[1,2,3,5,7,8],model_checkpoint:5,model_nam:8,modul:4,modular:5,more:[0,5],multi:4,multipl:3,must:4,n_layer:4,name:[3,8],necessari:6,need:5,neg:3,nllloss:[1,7],none:[3,4,7,8],norm:6,norm_term:3,normal:3,note:[2,4],num_direct:4,num_epoch:7,num_lay:4,number:[4,6,7,8],numpi:5,object:[1,4,6,7,8],onc:5,one:[3,4],onli:5,open:5,optim:[2,7,8],option:[1,3,4,5,6,7,8],org:3,organ:5,our:5,out:5,output:[3,4,5,8],output_len:4,output_vocab:[5,8],output_vocab_fil:8,overrid:3,overwritten:7,own:3,packag:[2,5,6],param:[6,8],paramet:[1,3,4,6,7,8],pass:8,path:8,perform:[1,6],pip:5,pleas:[0,3,5],pre:1,predict:[1,4,5],prepend:0,preprocess:0,previous:8,print:5,print_everi:7,probabl:4,problem:5,proce:5,process:[0,4],project:5,prompt:5,propos:5,provid:[4,5,6],publish:5,python:5,pytorch:[0,3,5,7],qualiti:5,question:5,randn:4,random:4,random_se:7,rate:6,ratio:7,recommend:5,recurr:4,refer:[2,3,5],regard:3,relat:8,releas:5,report:5,repres:4,request:5,requir:5,reset:3,result:3,resum:[5,7,8],ret_dict:4,retain_output_prob:4,revers:5,rnn:4,rnn_cell:4,root:[5,8],run:[5,7,8],same:3,sampl:[4,5],save:[5,8],schedul:6,script:5,search:4,seen:8,sentenc:[0,4],seq2seq:[0,1,3,5,6,7,8],seq_len:4,sequenc:[0,4,5],sequenti:8,set:[4,6,7],set_mask:4,set_schedul:6,setup:5,setuptool:5,sgd:6,should:6,shown:5,singl:6,size:[1,4,7],size_averag:3,small:5,smaller:4,sos:0,sos_id:[0,4],sourc:[0,1,3,4,6,7,8],sourcefield:0,specifi:4,src_seq:1,src_vocab:1,standard:4,start:[0,4],state:[4,8],step:[0,4,6,8],steplr:6,store:[3,5,7,8],str:[3,4,7,8],structur:5,sub:[3,4],subdirectori:8,supervis:[6,7],supervisedtrain:7,support:5,suspend:8,sym_eo:[0,4],sym_mask:4,sym_so:0,symbol:[0,4],system:5,take:5,target:[1,3,4],target_vari:4,targetfield:0,teach:7,teacher:4,teacher_forcing_ratio:[4,7],techniqu:5,tensor:[3,4],term:3,termin:5,tesla:5,text:0,tgt_seq:1,tgt_vocab:1,than:[4,5],them:3,thi:[3,4,5],those:8,through:8,time:8,timestamp:5,token:[1,3,4],top:4,top_k:7,topk_length:4,topk_sequ:4,torch:[3,4,5,6],torchtext:0,torcn:3,toy_revers:5,train:[1,3,6,7,8],train_path:5,trainer:[2,6,8],trainer_st:8,trainer_state_nam:8,transform:[4,5],translat:5,txt:5,type:[1,3,4,7,8],uniformli:4,updat:6,usabl:5,usag:5,use:[0,3,4,5],use_attent:4,used:[3,4,6],uses:6,using:[4,5,8],util:2,vagrant:5,vagrantfil:5,valu:[3,4,6],variabl:[0,3,4,8],variable_length:4,verifi:5,version:5,virtual:5,virtualenv:5,vocab:8,vocab_s:4,vocabulari:[4,8],volatil:4,websit:5,weight:[3,4],when:[3,4,6,8],where:4,whether:4,which:4,whose:4,within:[4,8],wmt:5,would:[4,7],wrapper:0,write:8,y_m_d_h_m_:8,you:5,your:[3,5],yyyy_mm_dd_hh_mm_ss:5},titles:["Dataset","Evaluator","Pytorch seq2seq library for the i-machine-think project","Loss","Models","Introduction","Optim","Trainer","Util"],titleterms:{attent:4,basernn:4,checkpoint:[5,8],code:5,contribut:5,dataset:[0,5],decoderrnn:4,develop:5,encoderrnn:4,environ:5,evalu:1,field:0,framework:[],from:5,get:5,instal:5,introduct:5,librari:2,loss:3,machin:2,model:4,nllloss:3,optim:6,perplex:3,plai:5,predictor:1,prepar:5,prerequisit:5,project:2,pytorch:2,roadmap:5,seq2seq:[2,4],sequenc:[],sourc:5,start:5,style:5,supervised_train:7,think:2,toi:5,topkdecod:4,train:5,trainer:7,troubleshoot:5,util:8}})