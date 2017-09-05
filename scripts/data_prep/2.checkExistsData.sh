#!/bin/bash

###################################################
# Script to make sure all participants' SST data  #
#		 	are in the behavioral analysis folders			#
###################################################

subs=(sub1 sub2 sub3 sub6 sub9 sub10 sub11 sub13 sub16 sub17 sub18 sub19 sub20 sub21 sub22 sub23 sub24 sub26 sub27 sub29 sub31 sub32 sub34 sub35 sub36 sub37 sub38 sub39 sub41 sub42 sub43 sub46 sub47 sub48 sub49 sub50 sub51 sub52 sub53 sub54 sub55 sub56 sub57 sub58 sub59 sub60 sub62 sub65 sub67 sub68 sub69 sub70 sub73 sub74 sub75 sub76 sub77 sub78 sub80 sub82 sub84 sub86 sub88 sub89 sub90 sub91 sub93 sub94 sub97 sub98 sub100 sub102 sub104 sub107 sub108 sub109 sub110 sub111 sub114 sub115 sub116 sub117 sub118 sub119 sub121 sub124 sub126 sub127 sub129 sub130 sub131 sub134 sub135 sub136 sub137 sub138 sub140 sub141 sub142 sub144) # List of participants
folder="/Users/kristadestasio/Desktop/REV/REV_SST/output/" # Location of the data files to be analyzed

cd $folder
echo "Checking..."
cd post
echo "FOLDER post"
for i in ${subs[@]}
	do
		if [ ! -f ${i}_run13*.mat ]
			then
			echo "$i run 13 not found."
		fi
		if [ ! -f "$i"_run14*.mat ]
			then
			echo "$i run 14 not found." 
		fi 
done
cd ../pre
echo "FOLDER pre"
for i in ${subs[@]}
	do
		if [ ! -f ${i}_run1*.mat ]
			then
			echo "$i run 1 not found."
		fi
		if [ ! -f ${i}_run2*.mat ]
			then
			echo "$i run 2 not found." 
		fi 
done
cd ../train
echo "FOLDER train"
for i in ${subs[@]}
	do
		if [ ! -f ${i}_run3*.mat ]
			then
			echo "$i run 3 not found."
		fi
		if [ ! -f ${i}_run4*.mat ]
			then
			echo "$i run 4 not found." 
		fi 		
		if [ ! -f ${i}_run5*.mat ]
			then
			echo "$i run 5 not found." 
		fi 
		if [ ! -f ${i}_run6*.mat ]
			then
			echo "$i run 6 not found." 
		fi 
		if [ ! -f ${i}_run7*.mat ]
			then
			echo "$i run 7 not found." 
		fi 
		if [ ! -f ${i}_run8*.mat ]
			then
			echo "$i run 8 not found." 
		fi 
		if [ ! -f ${i}_run9*.mat ]
			then
			echo "$i run 9 not found." 
		fi 
		if [ ! -f ${i}_run10*.mat ]
			then
			echo "$i run 10 not found." 
		fi 
done
echo "...done."
