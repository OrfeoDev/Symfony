<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExocreationPageController extends AbstractController
{
    #[Route('/exocreationpage', name: 'exocreation_page')]
    public function index(): Response
    {
        return $this->render('exocreation_page/index.html.twig', [
            'controller_name' => 'ExocreationPageController',
        ]);
    }
}
