global with sharing class KnowledgeController {
  @AuraEnabled
  public static List<List<SObject>>  searchKnowledge(String query) {
    return [FIND :query IN ALL FIELDS RETURNING KnowledgeArticleVersion(summary, title)];
  }
}
