#!/bin/bash

echo "Simple Interest Calculator"

read -p "Enter Principal Amount: " principal
read -p "Enter Rate of Interest: " rate
read -p "Enter Time Period (in years): " time

simple_interest=$((principal * rate * time / 100))

echo "Simple Interest is: $simple_interest"
