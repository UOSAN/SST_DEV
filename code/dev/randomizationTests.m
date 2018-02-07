% Every time you do "default" it starts w the same perm and goes thru the
% same sequence of perms
rng('default')
a=randperm(5)
a=[a; randperm(5)]
a=[a; randperm(5)]
rng('default')
a=[a; randperm(5)]
a=[a; randperm(5)]
a=[a; randperm(5)]

% Prevent it from going thru the same sequence of perms by using "shuffle"
% after "default"
rng('default')
rng('shuffle')
a=randperm(5)
a=[a; randperm(5)]
a=[a; randperm(5)]
rng('default')
rng('shuffle')
a=[a; randperm(5)]
a=[a; randperm(5)]
a=[a; randperm(5)]

% Let's examine more closely with limited permutations
rng('default')
rng('shuffle')
a=randperm(3)
a=[a; randperm(3)]
a=[a; randperm(3)]
rng('default')
rng('shuffle')
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
rng('default')
rng('shuffle')
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]


% What happens if you don't default it?
rng('shuffle')
a=randperm(3)
a=[a; randperm(3)]
a=[a; randperm(3)]
rng('shuffle')
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
rng('shuffle')
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]

% What happens with a lot of perms?
rng('shuffle')
a=randperm(3)
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]
a=[a; randperm(3)]

% What happens if you do different perm #s?
rng('default')
rng('shuffle')
a=randperm(3)
a=randperm(3)
a=randperm(5)
a=randperm(5)

