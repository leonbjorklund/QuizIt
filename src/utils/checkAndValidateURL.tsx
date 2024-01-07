export function checkAndValidateURL(input: string) {
  const httpsPattern = /https:\/\//;
  const domainSuffixPattern = /\.(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|se)$/;

  let isURL = false;
  let processedInput = input;

  if (httpsPattern.test(input)) {
    isURL = true;
  } else if (domainSuffixPattern.test(input)) {
    processedInput = 'https://' + input;
    isURL = true;
  }

  return { isURL, processedInput };
}
