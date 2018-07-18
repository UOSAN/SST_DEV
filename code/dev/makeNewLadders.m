cd ~/Desktop/DEV/SST_DEV/input/ladderFiles
for s=1:120
    for r=1:5
    oldFilename = ['s' num2str(s) 'r' num2str(r) '_UvH.mat'];
    newFilename = ['s' num2str(s+240) 'r' num2str(r) '_UvH.mat'];
    copyfile(oldFilename,newFilename)
    end
end

