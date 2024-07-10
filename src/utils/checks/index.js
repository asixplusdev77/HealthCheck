import activity from "./activity";
import description from "./description";
import topics from "./topics";
import url from "./url";

export default function checks(repo) {
  const checks = [description(repo), url(repo), topics(repo), activity(repo)];

  const summary = Object.groupBy(checks, ({ status }) => status);

  return { checks, summary };
}
