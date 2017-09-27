char firstDigit(String inputString) {
     java.util.regex.Pattern re = java.util.regex.Pattern.compile("[0-9]");
        java.util.regex.Matcher match = re.matcher(inputString);
        match.find();
        return inputString.charAt(match.start());
}
