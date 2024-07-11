const formatDateDistanceToNow = (date: Date, options?: { addSuffix?: boolean }): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return options?.addSuffix ? `${interval} years ago` : `${interval} years`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return options?.addSuffix ? `${interval} months ago` : `${interval} months`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return options?.addSuffix ? `${interval} days ago` : `${interval} days`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return options?.addSuffix ? `${interval} hours ago` : `${interval} hours`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return options?.addSuffix ? `${interval} minutes ago` : `${interval} minutes`;

  return options?.addSuffix ? `just now` : `just now`;
};

export default formatDateDistanceToNow;
