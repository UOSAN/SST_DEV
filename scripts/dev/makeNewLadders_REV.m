for s=1:59
    for r=2:10
    load(['dub_st' num2str(s) 'b' num2str(r) '.mat'])
    temp1=trialcode;
    load(['dub_st' num2str(s+1) 'b' num2str(r) '.mat'])
    temp2=trialcode;
    
    trialcode = cell(1,2);
    
    trialcode{1} = temp1;
    trialcode{2} = temp2;
    save(['dub_st' num2str(s) 'b' num2str(r) '.mat'],'trialcode')
    end
end

