% This script takes your SST output and checks to make sure there are no
% strange responses. You will get a bunch of output files of the form N x R
% (N subjects, R runs) telling you how many go trials per run (should always be
% the same number, say, 96) how many stop trials (should be 32)

% and importantly:

% how many NO RESPONSE trials
% (should be as low as possible, but a few isn't worrisome -- lots means
% they may have been responding so slowly that the script wasn't
% recognizing their response and was falsely categorizing them as stops
% which is bad!)

% how many WRONG GO trials
% In the absence of any "weird buttons," lots of wrong gos sometimes means
% they just flipped the buttons, either because they were handed the button
% boxes backwards, or they were thinking about the "open side" of the arrow
% rather than the direction it was pointing.

% how many "WEIRD BUTTON" trials
% This counts how many times they pressed buttons other than the ones you
% specify below (e.g. 91 & 94, 3 & 6, whatever)
% If they consistently pressed 2 & 7, for example, you can still use the
% data. If they flipped half way through, it'll be harder.


% INITIAL SETUP
studyPrefix = 'DEV'; % will use this in analysisReady data filenames. Defined in prep4analysis.m (should be consistent throughout scripts)
cd 'C:\Users\bryan\Dropbox (University of Oregon)\Berkman Lab\Devaluation\Tasks\SST_DEV\output\analysisReady'
% This should be the folder where your consistently-named SST output live.
% This script assumed they are named with this format: "REV_sub2_run3.mat"
% "REV" should be replaced with your study prefix.
% This would be the 3rd run for the 2nd subject.

% DEFINE SUBS
numSubs = 228;
exclude = [1:3 92 136 142 146 148 160 162 165 175 184 212:214 221 226 227];

buttonRuleExceptions = dlmread('systematicWrongButtons.txt','\t');

% DEFINE SUB# FORMAT
% Explain subject number format (matlab does not like zeros before a number)

if numSubs<10
    placeholder = '00'; % If subject# one digit, 00 placeholder (ex: 9 becomes 009)
elseif numSubs<100
    placeholder = '0'; % If subject# two digits, 0 placeholder (ex: 12 becomes 012)
else placeholder = '';
end


% DEFINE RUNS
numRuns = 5; % Total number of runs

% DEFINE BUTTONS
% These codes should reflect what's in the response column of the Seeker variable
% Scanner is usually 91 & 94; Behavioral (keyboard) is 197 & 198 for
% <carrots>, 15 & 21 for arrows

leftButtonList=[15,91];
rightButtonList=[21,94];

% scannerLeftIndex=91;
% scannerRightIndex=94;
% keyboardLeftCarrot=197;
% keyboardRightCarrot=198;
% keyboardLeftArrow=15;
% keyboardRightArrow=21;

% DEFINE SEEKER VARIABLE
% Some versions of the SST set up the Seeker variable differently.
% The script should tell you which columns are which and what different
% codes mean, but you can also deduce it from looking at the actual output.
% Change these to reflect your Seeker variable structure.

% Define columns in output
trialTypeColumn=3;
arrowDirColumn=4;
responseKeyColumn=7;

% Define codes in output for stop, go, left, and right
goCode=0;
stopCode=1;
leftCode=0;
rightCode=1;

% DEFINE VARIABLES (.MAT FILES TO BE CREATED)
weirdButtonCountMat=nan(numSubs,numRuns);
goCountMat=nan(numSubs,numRuns);
stopCountMat=nan(numSubs,numRuns);
NRCountMat=nan(numSubs,numRuns);
wrongGoCountMat=nan(numSubs,numRuns);

% DEFINE BUTTON ROUTES
for s=1:numSubs
    if find(exclude==s) % Leave excluded subject rows as NaN
    else
        for r=1:numRuns % For runs 1 to numRuns defined previously
            if exist([studyPrefix '_sub' num2str(s) '_run' num2str(r) '.mat'])
                load([studyPrefix '_sub' num2str(s) '_run' num2str(r) '.mat'])  % Load .mats
                
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
                    else % keyboard run
                        dub=1;
                        LEFT=leftButtonList(1);
                        RIGHT=rightButtonList(1);
                    end
                    
                    if ~isempty(probRow)
                        LEFT = buttonRuleExceptions(probRow,3);
                        RIGHT = buttonRuleExceptions(probRow,4);
                    end                 
                    
                    % DEFINE VARIABLES (FOR SCAN TRIALS)
                    trialType=Seeker(:,trialTypeColumn); % 0=Go, 1=NoGo, 2=null, 3=notrial
                    arrowDir=Seeker(:,arrowDirColumn); % 0=left, 1=right, 2=null
                    responseKey=Seeker(:,responseKeyColumn);
                    numGoTrials = sum(trialType==goCode);
                    numStopTrials = sum(trialType==stopCode);
                    isGo = trialType==goCode;
                    isCorrectButton = (arrowDir==leftCode&responseKey==LEFT)|(arrowDir==rightCode&responseKey==RIGHT);
                    numCorrectGoTrials = sum(isGo&isCorrectButton);
                    numBadGoTrials = numGoTrials - numCorrectGoTrials;
                    numNRTrials = sum(isGo&responseKey==0);
                    weirdButtonTrials = ~(responseKey==0|responseKey==LEFT|responseKey==RIGHT);
                    
                    wrongGoCountMat(s,r) = numBadGoTrials - numNRTrials;
                    goCountMat(s,r) = numGoTrials;
                    stopCountMat(s,r) = numStopTrials;
                    NRCountMat(s,r) = numNRTrials;
                    weirdButtonCountMat(s,r) = sum(weirdButtonTrials);
                end
            end % End if statement
        end % End scan loop
    end
end


% CREATE OUTPUT DIRECTORIES
% I make a new directory for output each time I check my data, based on how
% many subjects I've run:
mkdir(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs)])
% The output for this initial check goes here:
mkdir(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/'])
% For all the single-var texts, with an N x R matrix of that particular
% variable:
mkdir(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/singleVarTxts/'])
% For collapsing across runs, and getting output of the form N x V where
% V=number of variables you're looking at for each subject:
mkdir(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/collapsed/'])
% For .mat files containing all variables you might want to import at a
% later time (say, while collapsing):
mkdir(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/varMats/'])

dlmwrite(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/wrongGoCount.txt'],wrongGoCountMat,'delimiter','\t');
dlmwrite(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/goCount.txt'],goCountMat,'delimiter','\t');
dlmwrite(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/stopCount.txt'],stopCountMat,'delimiter','\t');
dlmwrite(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/NRCount.txt'],NRCountMat,'delimiter','\t');
dlmwrite(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/initialCheck/weirdButtonCount.txt'],weirdButtonCountMat,'delimiter','\t');

