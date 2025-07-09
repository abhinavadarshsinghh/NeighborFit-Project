def score_neighborhood(n, p, w):
    score = 0
    score += abs(n["green_space"] - p["green_space"]) * w.get("green_space", 1) * -1
    score += abs(n["nightlife"] - p["nightlife"]) * w.get("nightlife", 1) * -1
    score += abs(n["family_friendly"] - p["family_friendly"]) * w.get("family_friendly", 1) * -1
    return score

def find_best_match(user_prefs, neighborhoods):
    weights = user_prefs.get("weights", {})
    prefs = user_prefs.get("preferences", {})

    best_score = float('-inf')
    best_neighborhood = None
    for n in neighborhoods:
        score = score_neighborhood(n, prefs, weights)
        if score > best_score:
            best_score = score
            best_neighborhood = n
    return best_neighborhood
