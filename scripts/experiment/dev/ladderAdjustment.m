function [Seeker,Ladder,Ladder1,Ladder2] = ladderAdjustment(Pos,Seeker,Ladder,Ladder1,Ladder2,Step)

% after each 8 trials, this code does the updating of staircases
%These three loops update each of the ladders

for c=(Pos-16):Pos-1,
    %This runs from one to two, one for each of the ladders
    for d=1:2,
        if (Seeker(c,7)~=0&Seeker(c,5)==d),	%col 7 is sub response
            if Ladder(d,1)>=Step,
                Ladder(d,1)=Ladder(d,1)-Step;
                Ladder(d,2)=-1;
            elseif Ladder(d,1)>0 & Ladder(d,1)<Step,
                Ladder(d,1)=0;
                Ladder(d,2)=-1;
            else,
                Ladder(d,1)=Ladder(d,1);
                Ladder(d,2)=0;
            end;
            if (d==1),
                [x y]=size(Ladder1);
                Ladder1(x+1,1)=Ladder(d,1);
            else if (d==2),
                    [x y]=size(Ladder2);
                    Ladder2(x+1,1)=Ladder(d,1);
                end;end;
        else if (Seeker(c,5)==d & Seeker(c,7)==0),
                Ladder(d,1)=Ladder(d,1)+Step;
                Ladder(d,2)=1;
                if (d==1),
                    [x y]=size(Ladder1);
                    Ladder1(x+1,1)=Ladder(d,1);
                else if (d==2),
                        [x y]=size(Ladder2);
                        Ladder2(x+1,1)=Ladder(d,1);
                    end;end;
            end;end;
    end;
end;
%Updates the time in each of the subsequent stop trials
for c=Pos:256,
    if (Seeker(c,5)~=0), %i.e. staircase trial
        Seeker(c,6)=Ladder(Seeker(c,5),1);
    end;
end;
%Updates each of the old trials with a +1 or a -1
for c=(Pos-16):Pos-1,
    if (Seeker(c,5)~=0),
        Seeker(c,8)=Ladder(Seeker(c,5),2);
    end;
end;