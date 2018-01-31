maxTime = nan(100,5);
for s=1:100
    for r=1:5
        
        load(['/Users/laurenkahn/Desktop/SST_DEV/input/ladderFiles/s' num2str(s) 'r' num2str(r) '_UvH.mat'])
        maxTime(s,r) = trialcode(end,3);
        
    end
end