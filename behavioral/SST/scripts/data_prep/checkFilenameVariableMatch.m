cd('~/Desktop/REV/REV_SST/output/analysisReady')
studyPrefix = 'REV';
startRun = 1;
endRun = 14;

Subs=[1:3 6 9 10:11 13 16:24 26:27 29 31:32 34:39 41 43 44 46:60 62 65 67:70 73:78 80 82 84 86 88:89 90:91 93:94 97:98 100 102 104 107:111 114:119 121 124 126:127 129:131 134:138 140:142 144];

for s=Subs
    for r=startRun:endRun
        filename = [studyPrefix '_sub' num2str(s) '_run' num2str(r) '.mat'];
        if exist(filename)
            load(filename)
            if r < 3
                if ~subject_code==s || ~sub_session==r
                    fprintf('Check file %s\n',filename)
                end
            elseif r < 13
                if ~(subject_code==s) || ~(sub_session==r-2)
                    fprintf('Check file %s\n',filename)
                end
            else
                if ~(subject_code==s) || ~(sub_session==r-10)
                    fprintf('Check file %s\n',filename)
                end
            end
        end
    end
end
    