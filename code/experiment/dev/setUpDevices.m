
function [response_keyboard, internal_keyboard] = setUpDevices(MRI)
numDevices=PsychHID('NumDevices');
devices=PsychHID('Devices');

%makes start device the control computer (see note below re: customizing to your computer)
if MRI
    for k = 1:numDevices
        if strcmp(devices(k).usageName,'Keyboard') && strcmp(devices(k).product,'Xkeys')
            internal_keyboard=k;
            fprintf('Defaulting: Home Device is #%d (%s)\n',internal_keyboard,devices(internal_keyboard).product);
            break,
        end
    end
else
    for k = 1:numDevices
        if strcmp(devices(k).transport,'USB') && strcmp(devices(k).usageName,'Keyboard') && strcmp(devices(k).product,'Apple Internal Keyboard / Trackpad') %note: this is the name of my default device-- may need to be updated depending on your system
            internal_keyboard=k;
            fprintf('Home Device is #%d (%s)\n',internal_keyboard,devices(internal_keyboard).product);
            break,
        elseif strcmp(devices(k).transport,'Bluetooth') && strcmp(devices(k).usageName,'Keyboard')
            internal_keyboard=k;
            fprintf('Home Device is #%d (%s)\n',internal_keyboard,devices(internal_keyboard).usageName);
        elseif strcmp(devices(k).product,'Apple Internal Keyboard / Trackpad') && strcmp(devices(k).usageName,'Keyboard')
            internal_keyboard=k;
            fprintf('Home Device is #%d (%s)\n',internal_keyboard,devices(internal_keyboard).usageName);
        elseif strcmp(devices(k).manufacturer,'Apple Inc.') && strcmp(devices(k).usageName,'Keyboard')
            internal_keyboard=k;
            fprintf('Home Device is #%d (%s)\n',internal_keyboard,devices(internal_keyboard).usageName);
        end
    end
end

%if button box was requested at start of experiment, use it, otherwise, use
%the keyboard
if MRI
    for n=1:numDevices
        if strcmp(devices(n).usageName,'Keyboard') && strcmp(devices(n).product,'Xkeys')
            response_keyboard=n;
            fprintf('Using Device #%d (%s)\n',response_keyboard,devices(response_keyboard).product);
            break,
        end
    end
else
    for n=1:numDevices
        if strcmp(devices(n).transport,'Bluetooth') && strcmp(devices(n).usageName,'Keyboard')
            response_keyboard=n;
            break,
        elseif strcmp(devices(n).transport,'ADB') && strcmp(devices(n).usageName,'Keyboard')
            response_keyboard=n;
            break,
        elseif strcmp(devices(n).transport,'USB') && strcmp(devices(n).usageName,'Keyboard')
            response_keyboard=n;
            break,
        elseif strcmp(devices(n).transport,'SPI') && strcmp(devices(n).usageName,'Keyboard')
            response_keyboard=n;
        end
    end
    printf('Using Device #%d (%s)\n',response_keyboard,devices(n).product);
end
end