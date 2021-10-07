revision_date='10-05-21';

cd('C:\Users\bryan\Dropbox (University of Oregon)\Berkman Lab\Devaluation\Tasks\SST_DEV\output\analysisReady');
steps=16;
exclude = [1:3 92 136 142 146 148 160 162 165 175 184 212:214 221 226 227]; % If you want to exclude any numbers, put them in this vector (e.g. exclude = [5 20];)
numSubs = 228;
numRuns = 5;

% These two codes should reflect what's in the response column of the Seeker variable
% You'll specify exceptions to this rule below
% leftButton=91;
% rightButton=94;
% studyPrefix='INC'; % You'll use this in your analysisReady data filenames
leftButtonList=[15,91];
rightButtonList=[21,94];
studyPrefix='DEV'; % You'll use this in your analysisReady data filenames

%% DEFINE EXCEPTIONS TO BUTTON RULE
% Make each exception a string for what subject (s) and what run (2) it
% applies
% problemSubjects = [2,12];
% problemRuns= {2,{3,4,5}};
% switchRule = 'LEFT = rightButton;RIGHT = leftButton;'
% alternativeRules={switchRule,switchRule};

buttonRuleExceptions = dlmread('systematicWrongButtons.txt','\t');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

if numSubs<10
    placeholder = '00';
elseif numSubs<100
    placeholder = '0';
else placeholder = '';
end

%%%%%%

NRCount = dlmread(['../../compiledResults/upto' studyPrefix placeholder num2str(numSubs) '/initialCheck/NRCount.txt'],'\t');

% Initialize variables
results = nan(numSubs,numRuns,10);

for s=1:numSubs
    if find(exclude==s)
        % keep as NaNs
    else
        for r=1:numRuns
            filename=[studyPrefix '_sub' num2str(s) '_run' num2str(r)];
            if exist([filename '.mat'])
                
                problemSubIdx = find(buttonRuleExceptions(:,1)==s);
                problemRunIdx = find(buttonRuleExceptions(:,2)==r);
                probRow = intersect(problemSubIdx,problemRunIdx);
                
                if isnan(buttonRuleExceptions(probRow,3))
                    % keep this run as NaNs
                else
                    
                    if r<3 % scanning run
                        dub=0;
                        LEFT=leftButtonList(2);
                        RIGHT=rightButtonList(2);
                    else % training run
                        dub=1;
                        LEFT=leftButtonList(1);
                        RIGHT=rightButtonList(1);
                    end
                    
                    if ~isempty(probRow)
                        LEFT = buttonRuleExceptions(probRow,3);
                        RIGHT = buttonRuleExceptions(probRow,4);
                    end
                    
                    [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint PctInhib SSDfifty] = extractSSTResults(filename,RIGHT,LEFT,steps,dub);
                    results(s,r,1:10) = [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint mean(PctInhib) SSDfifty];
                                       
                end
            end
        end
    end
end

GRTmean_results = results(:,:,1);
GRTmedian_results = results(:,:,2);
GRTmedian_GoOnly_results = results(:,:,3);
SSRT_results = results(:,:,4);
GRTquant_results = results(:,:,5);
SSRTquant_results = results(:,:,6);
GRTint_results = results(:,:,7);
SSRTint_results = results(:,:,8);
PctInhib_results = results(:,:,9);
SSD_results = results(:,:,10);
NRCount_results = NRCount;

%%%%%%%% SAVE VARIABLES (txt & mat)

varList = {'GRTmean','GRTmedian','SSRT','GRTquant','GRTint','SSRTint','PctInhib','SSD','NRCount'};

for v=1:length(varList)
    currentVar = varList{v};
    command1 = ['dlmwrite([''../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/singleVarTxts/' studyPrefix '_'' varList{v} num2str(steps) ''.txt''],' currentVar '_results,''delimiter'',''\t'');'];
    eval(command1);
end

save(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/varMats/resultVars' num2str(steps)],'GRTmean_results','GRTmedian_results','SSRT_results','GRTquant_results','SSRTquant_results','GRTint_results','SSRTint_results','SSD_results','PctInhib_results','NRCount')
